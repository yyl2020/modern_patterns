class Dog {
    constructor(name) {
        this.name = name
    }
    back() {
        return 'Woof'
    }
}
const dog1 = new Dog('max')
const dog2 = new Dog('spot')
const dog3 = new Dog('daisy')

console.log(Dog.prototype === dog1.__proto__) // true

Dog.prototype.play = () => console.log('play')
dog1.play()

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }
    fly() {
        return 'fly'
    }
}

const superDog1 = new SuperDog('max')
// ptototype chain 原型链
// 当我们尝试访问对象上不直接可用的属性时，JavaScript 会递归地遍历所有__proto__指向的对象，直到找到该属性
console.log(SuperDog.prototype === superDog1.__proto__) // true
console.log(SuperDog.prototype.__proto__ === Dog.prototype) // true

// Object.create()
// 通过指定新创建的对象的原型,让对象直接从其他对象继承属性
// 新对象可以通过沿着原型链访问新属性
const cat = {
    back () {
        console.log('meow')
    }
}
const cat1 = Object.create(cat)
cat1.back()
console.log("Direct properties on pet1: ", Object.keys(cat1));
console.log("Properties on pet1's prototype: ", cat1.__proto__);