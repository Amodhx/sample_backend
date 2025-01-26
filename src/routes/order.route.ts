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

    }
}
const OrderRouter : OrderRoute = new OrderRoute();
export default OrderRouter;
