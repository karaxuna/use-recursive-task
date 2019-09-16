(async function () {
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

    const exec = async function* (context) {
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

    const test = (result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (result !== 3) {
                    resolve(result)
                }
                else {
                    reject('hah!')
                }
            }, 1000)
        })
    }

    const generator = exec(
        /*{
            fn: function* () {
                const data = yield {
                    fn: test,
                    args: [3]
                }

                console.log('data:', data)
            }
        }
        [{
            fn: function* () {
                yield {
                    fn: test,
                    args: [3]
                }
            }
        }, {
            fn: function* () {
                yield {
                    fn: test,
                    args: [4]
                }
            }
        }]*/{
        fn: function* () {
            let data;

            console.log('0. data:', data)

            data = yield {
                fn: test,
                args: [1]
            }

            console.log('1. data:', data)

            data = yield {
                fn: test,
                args: [2]
            }

            console.log('2. data:', data)

            data = yield [{
                fn: function* () {
                    return yield {
                        fn: test,
                        args: [3]
                    }
                }
            }, {
                fn: function* () {
                    return yield {
                        fn: test,
                        args: [4]
                    }
                }
            }]

            console.log('3, 4. data:', data)
            return 5
        }
    })

    while (true) {
        const res = await generator.next()
        console.log(res)

        if (res.done) {
            break
        }

        if (res.value.errs.length && confirm('err: ' + res.value.errs[0].message + ', retry?')) {
            res.value.retry()
        }
    }
})()
