import OrderService from "../service/order.service";
import OrderDetailService from "../service/orderDetail.service";

class OrderController{
    orderService:OrderService
    orderDetailService:OrderDetailService
    constructor(orderService:OrderService,orderDetailService:OrderDetailService) {
        this.orderService  = orderService;
        this.orderDetailService = orderDetailService;
    }
}
export default OrderController