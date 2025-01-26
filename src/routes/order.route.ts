import {Router} from "express";
import OrderController from "../controller/order.controller";

class OrderRoute{
    router:Router
    orderController:OrderController
    constructor() {
        this.router = Router();
        this.orderController = new OrderController();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveOrder',this.orderController.saveOrder)
        this.router.get('/getAllOrders',this.orderController.getAllOrders)
        this.router.get('/getOrderById',this.orderController.getOrderById)
        this.router.delete('/deleteOrder',this.orderController.deleteOrder)
    }
}
const OrderRouter : OrderRoute = new OrderRoute();
export default OrderRouter;
