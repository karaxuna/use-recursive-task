import { exec } from '../lib'

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

(async () => {
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