var i = 0;
function example() {
    return new Promise((resolve, reject) => setTimeout(() => (i++ % 3 === 0 ? reject(new Error('he')) : resolve(9)), 2000))
}

function call(fn, args, context) {
    return {
        fn,
        args,
        context
    }
}

task(function* () {
    var a = yield call(example)
    debugger
    var b = yield call(example)
    debugger
    var c = yield call(example)
    debugger
    return a + b + c
}, (action) => {
    console.log(action)
    if (action.type === 'FAILED' && confirm(`Task failed with error: "${action.payload.err.message}", retry?`)) {
        action.payload.retry()
    }
})

function task(generatorFn, onUpdate) {
    const generator = generatorFn()

    const iterate = (r) => {
        const { value, done } = generator.next(r)
        if (done) {
            onUpdate({
                type: 'FINISHED',
                payload: value
            })
        }
        else {
            const retry = () => {
                onUpdate({
                    type: 'STARTED'
                })

                value.fn.apply(value.context, value.args).then(result => {
                    iterate(result)
                }).catch(err => {
                    onUpdate({
                        type: 'FAILED',
                        payload: {
                            err,
                            retry
                        }
                    })
                })
            }

            retry()
        }
    }

    iterate()
}