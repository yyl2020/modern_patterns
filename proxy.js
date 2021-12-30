const person = {
    name: 'John',
    age: 42,
    nationality: 'American'
}
// 第二个参数是 handler,我们可以根据交互类型定义特定的行为,我们能添加很多方法,最常见的是 get 和 set
// get: 当访问属性的时候调用
// set: 当修改属性的时候调用
// JS 提供内置对象 Reflect,使我们在使用代理时更容易操作目标对象
const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`)
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    },
    set: (obj, prop, value) => {
        console.log(`change ${prop} from ${obj[prop]} to ${value}`)
        obj[prop] = value
        Reflect.set(obj, prop, value)
    }
}); 
personProxy.age
personProxy.name = 'Tom'
console.log(person)
// proxy 的一大用处是添加验证
// 比如用户不能修改 person 的年龄为字符串或者为空
// 或者当访问不存在的属性时，要给用户提示
const personProxy2 = new Proxy(person, {
    get: (obj, prop) => {
        if(!obj[prop]) {
            throw new Error(`${prop} is not exist`)
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`)
        }
    },
    set: (obj, prop, value) => {
        if(prop === 'age' && typeof value === 'string') {
            console.log(`Sorry, you can only pass numeric values for age.`);
        }else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        }else{
            console.log(`change ${prop} from ${obj[prop]} to ${value}`)
            obj[prop] = value
        }
    }
})