import {Router} from "express";
import OrderController from "../controller/order.controller";
import OrderService from "../service/order.service";
import OrderDao from "../dao/order.dao";

class OrderRoute{
    router:Router
    orderController:OrderController
    orderService:OrderService
    orderDao :OrderDao
    constructor() {
        this.router = Router();
        this.orderDao = new OrderDao();
        this.orderService = new OrderService(this.orderDao);
        this.orderController = new OrderController(this.orderService);
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const OrderRouter : OrderRoute = new OrderRoute();
export default OrderRouter;
