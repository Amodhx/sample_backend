import OrderDao from "../dao/order.dao";
import OrderModel from "../model/order.model";

const orderDao = new OrderDao();
class OrderService{

    async saveOrder(orderObj:OrderModel){
        return await orderDao.create(orderObj);
    }

}
export default OrderService