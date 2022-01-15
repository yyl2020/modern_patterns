// 工厂模式是一个不使用new关键字就返回对象的函数
const createUser = ({firstName, lastName, email}) => ({
    firstName,
    lastName,
    email,
    fullName: () => `${firstName} ${lastName}`
})

const user1 = createUser({
    firstName: 'John',
    lastName: 'Doe',
    email: '1111@qq.com'
})
const user2 = createUser({
    firstName: 'Jane',
    lastName: 'Doe',
    email: '121312@qq.com'
})