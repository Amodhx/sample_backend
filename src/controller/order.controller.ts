import OrderService from "../service/order.service";

class OrderController{
    orderService:OrderService
    constructor(orderService:OrderService) {
        this.orderService  = orderService;
    }
}
export default OrderController