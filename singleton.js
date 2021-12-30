let instance;
let counter = 0

class Counter {
    constructor () {
        if(instance) {
            throw new Error('Counter is a singleton class')
        }
        instance = this
    }
    getInstance () {
        return this
    }
    getCount () {
        return counter
    }
    increment () {
        return ++counter
    }
    decrement () {
        return --counter
    }
 }
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter