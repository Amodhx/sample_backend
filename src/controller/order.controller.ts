import OrderService from "../service/order.service";
import OrderModel from "../model/order.model";

const orderService = new OrderService();
class OrderController{

    async saveOrder(req,resp){
        const data = req.body;
        const orderData = new OrderModel(
            data.order_id,
            data.customer_id,
            data.item_ids
        )
        resp.status(201).send(await orderService.saveOrder(orderData));
    }

}
export default OrderController