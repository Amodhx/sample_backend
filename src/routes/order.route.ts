import {Router} from "express";
import OrderController from "../controller/order.controller";
import OrderService from "../service/order.service";
import OrderDetailService from "../service/orderDetail.service";
import OrderDao from "../dao/order.dao";
import OrderDetailsDao from "../dao/orderDetails.dao";

class OrderRoute{
    router:Router
    orderController:OrderController
    orderService:OrderService
    orderDetailService : OrderDetailService
    orderDao :OrderDao
    orderDetailsDao:OrderDetailsDao
    constructor() {
        this.router = Router();
        this.orderDao = new OrderDao();
        this.orderDetailsDao = new OrderDetailsDao();
        this.orderService = new OrderService(this.orderDao);
        this.orderDetailService = new OrderDetailService(this.orderDetailsDao);
        this.orderController = new OrderController(this.orderService,this.orderDetailService);
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const OrderRouter : OrderRoute = new OrderRoute();
export default OrderRouter;
