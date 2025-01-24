import OrderDetailsDao from "../dao/orderDetails.dao";

class OrderDetailService{
    orderDetailsDao : OrderDetailsDao
    constructor(orderDetailsDao:OrderDetailsDao) {
        this.orderDetailsDao = orderDetailsDao;
    }
}
export default OrderDetailService;