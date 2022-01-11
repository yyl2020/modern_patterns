class OrderManager {
    constructor() {
        this.orders = []
    }
    placeOrder(order, id){
        this.orders.push(id)
        return `You have successfully ordered ${order} (${id})`
    }
    trackOrder(id){
        return `Your order ${id} will arrive in 20 minutes.`
    }
    cancelOrder(id){
        this.orders = this.orders.filter(order => order.id !== id)
        return `You have canceled your order ${id}`
    }
}

// const manager = new OrderManager();

// manager.placeOrder("Pad Thai", "1234");
// manager.trackOrder("1234");
// manager.cancelOrder("1234");
// 上面的方法有缺点，当我们重命名一些方法时，要在其他调用的地方全部更改，大型项目中十分麻烦

class NewOrderManager {
    constructor() {
        this.order = []
    }
    execute(command, ...args) {
        return command.execute(this.order, ...args)
    }
    showOrder() {
        return this.order
    }
}
class Command {
    constructor(execute){
        this.execute = execute
    }
}
function PlaceOrderCommand(order, id){
    return new Command((orders)=>{
        orders.push(id)
        console.log(`You have successfully ordered ${order} (${id})`)
    })
}
function TrackOrderCommand(id){
    return new Command(()=>{
        console.log(`Your order ${id} will arrive in 20 minutes.`)
    })
}
function CancelOrderCommand(id){
    return new Command((orders)=>{
        console.log(orders, 'before')
        // orders = orders.filter(orderId => orderId !== id)
        const index = orders.indexOf(id)
        if(index !== -1){
            orders.splice(index, 1)
        }
        console.log(orders, 'after')
        console.log(`You have canceled your order ${id}`)
    })
}
const manager = new NewOrderManager();
manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
console.log(manager.showOrder())
