import OrderDao from "../dao/order.dao";
import OrderModel from "../model/order.model";

const orderDao = new OrderDao();
class OrderService{

    async saveOrder(orderObj:OrderModel){
        return await orderDao.create(orderObj);
    }
    async getAllOrders(){
        return await orderDao.getAllOrders();
    }
    async getOrderById(id:string){
        return await orderDao.getOrderById(id);
    }
    async deleteOrder(id:string){
        return await orderDao.deleteOrder(id);
    }


}
export default OrderService