var i = 0;
function example() {
    return new Promise((resolve, reject) => setTimeout(() => (i++ % 3 === 0 ? reject(new Error('he')) : resolve(9)), 1000))
}

const call = (fn, args, context) => {
    return {
        fn,
        args,
        context
    }
}

const exec = async function* (generator, { value, done } = generator.next()) {
    if (done) {
        return yield {
            type: 'FINISHED',
            payload: value
        }
    }

    let error
    let result

    yield {
        type: 'PROCESSING'
    }

    try {
        result = await value.fn.apply(
            value.context,
            value.args
        )
    }
    catch (err) {
        error = err
    }

    if (error) {
        yield {
            type: 'FAILED',
            payload: error
        }

        yield* await exec(generator, {
            value, done
        })
    }
    else {
        yield* await exec(
            generator,
            generator.next(result)
        )
    }
}

async function* startTask(factory) {
    const generator = factory()
    return yield* await exec(generator)
}

(async () => {
    const stream = startTask(function* () {
        var a = yield call(example)
        debugger
        var b = yield call(example)
        debugger
        var c = yield call(example)
        debugger
        return a + b + c
    });

    for await (let event of stream) {
        console.log(event);
        if (event.type === 'FAILED' && !confirm(`Task failed with error: "${event.payload.message}", retry?`)) {
            break
        }
    }
})()
