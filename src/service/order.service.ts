import OrderDao from "../dao/order.dao";

class OrderService{
    orderDao : OrderDao
    constructor(orderDao : OrderDao) {
        this.orderDao = orderDao
    }
}
export default OrderService