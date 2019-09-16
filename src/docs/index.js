import { exec, call } from '../lib'

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
    call(function* () {
        let data;

        console.log('0. data:', data)

        data = yield call(test, [1])

        console.log('1. data:', data)

        data = yield call(test, [2])

        console.log('2. data:', data)

        data = yield [
            data = yield call(test, [3]),
            data = yield call(test, [4])
        ]

        console.log('3, 4. data:', data)
        return 5
    })  
)

async function asd() {
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
}

asd()