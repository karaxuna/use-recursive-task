const createIteratorStartingFrom = function *(array, startFrom) {
    let i
    let index
    let item

    for (i = 0; i < array.length; i++) {
        index = (startFrom + i) % array.length
        item =  array[index]
        yield [item, index]
    }
}

const getFreeItemStartingFrom = (items, startFrom) => {
    for (let [item, index] of createIteratorStartingFrom(items, startFrom)) {
        if (!item.busy && !item.done) {
            return {
                item,
                index
            }
        }
    }
}

export const createParallelIterator = (iterators) => {
    const queue = []
    const results = []
    let watcher = null
    let index = 0

    const items = iterators.map(iterator => {
        return {
            iterator,
            busy: false
        }
    })

    const isDone = () => {
        return results.length === iterators.length
    }

    const call = async (i, arg) => {
        const item = items[i]
        item.busy = true

        const {
            done,
            value
        } = await item.iterator.next(arg)

        item.busy = false

        if (done) {
            results.push(value)
            item.done = true
        }
        else {
            queue.push(value)
            index = i
        }

        if (watcher) {
            let _watcher = watcher
            watcher = null
            _watcher()
        }
    }

    const next = async () => {
        if (isDone()) {
            return {
                done: true,
                value: results
            }
        }

        if (queue.length) {
            return {
                done: false,
                value: queue.shift()
            }
        }

        const promise = new Promise((resolve, reject) => {
            watcher = () => {
                if (isDone()) {
                    resolve({
                        done: true,
                        value: results
                    })
                }
                else if (queue.length) {
                    resolve({
                        done: false,
                        value: queue.shift()
                    })
                }
                else {
                    next().then(resolve, reject)
                }
            }
        })

        const free = getFreeItemStartingFrom(items, index)

        if (free) {
            call(free.index)
        }

        return await promise
    }

    return {
        next
    }
}
