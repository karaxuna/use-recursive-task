import { createParallelIterator } from './ParallelIterator'

const isPromise = (target) => {
    return typeof target.then === 'function'
}

const isIterator = (target) => {
    return typeof target.next === 'function' && typeof target[Symbol.iterator] === 'function'
}

const parallel = function (contexts) {
    const iterators = contexts.map(context => {
        return exec(context)
    })

    return {
        [Symbol.asyncIterator]() {
            return createParallelIterator(iterators)
        }
    }
}

export const exec = async function* (context) {
    if (Array.isArray(context)) {
        return yield* await parallel(context)
    }

    const result = context.fn.apply(context.context, context.args)

    if (isPromise(result)) {
        let data

        try {
            data = await result
        }
        catch (err) {
            let retry
            const untilRetry = new Promise((resolve) => {
                retry = resolve
            })

            yield {
                context,
                errs: [err],
                retry
            }

            await untilRetry
            return yield* await exec(context)
        }

        return data
    }

    if (isIterator(result)) {
        let last;
        while (true) {
            let {
                done,
                value: context
            } = await result.next(last)

            if (done) {
                return context
            }

            const gen = exec(context)
            while (true) {
                const event = await gen.next()

                if (event.done) {
                    last = event.value
                    break
                }
                else {
                    yield event.value
                }
            }
        }
    }
}
