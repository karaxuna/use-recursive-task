(async function () {
    const isPromise = (target) => {
        return typeof target.then === 'function'
    }

    const isGenerator = (target) => {
        return typeof target.next === 'function' && typeof target[Symbol.iterator] === 'function'
    }

    class Queue {
        items = []
        done = false
        watcher = null

        push(item) {
            this.items.push(item)

            if (this.watcher) {
                this.watcher(item)
            }
        }

        async next() {
            if (this.items.length) {
                return events.splice(0, 1)[0]
            }

            return new Promise(resolve => {
                this.watcher = (item) => {
                    this.watcher = null
                    resolve(item)
                }
            })
        }
    }

    const parallel = function (contexts) {
        return {
            [Symbol.asyncIterator]() {
                const queue = new Queue()

                for (let context of contexts) {
                    const generator = exec(context)

                    const iterate = async () => {
                        const {
                            done,
                            value: event
                        } = await generator.next()

                        queue.push(event)

                        if (done) {
                            results.push(event)
                        }
                        else {
                            iterate()
                        }
                    }

                    iterate()
                }

                return {
                    async next() {
                        const value = await queue.next()
                    }
                }
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
                yield {
                    context,
                    errs: [err]
                }

                return yield* await exec(context)
            }

            return yield {
                context,
                data,
                errs: []
            }
        }

        if (isGenerator(result)) {
            let last;
            while (true) {
                let {
                    done,
                    value: context
                } = await result.next(last)

                if (done) {
                    return last
                }

                for await (let event of exec(context)) {
                    last = event.data
                    yield event
                }
            }
        }
    }

    const test = (result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result)
            }, 4000)
        })
    }

    const generator = exec({
        fn: function* () {
            let data;

            // console.log('0. data:', data)

            // data = yield {
            //     fn: test,
            //     args: [1]
            // }

            // console.log('1. data:', data)

            // data = yield {
            //     fn: test,
            //     args: [2]
            // }

            // console.log('2. data:', data)

            data = yield [{
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
            }]

            console.log('3, 4. data:', data)
            return 5
        }
    })

    for await (let event of generator) {
        console.log(event)
    }
})()
