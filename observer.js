// 我们可以将某些对象（观察者 observers）订阅到另一个对象，称为(可观察的 observable)
// 当某些事件发生时，observable 会通知所有的 observers

// An observable object usually contains 3 important parts:
// obervers: 一组观察者，每当发生特定事件时都会收到通知
// subscribe: 将观察者添加到观察者列表
// unsubscribe: 从观察者列表中删除观察者
// notify: 当特定事件发生时通知所有观察者
class Observable {
    constructor () {
        this.observers = []
    }
    subscribe (func) {
        this.observers.push(func)
    }
    unsubscribe (func) {
        this.observers = this.observers.filter(observer => observer !== func)
    }
    notify (data) {
        this.observers.forEach(observer => observer(data))
    }
}