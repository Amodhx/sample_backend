import {Router} from "express";

class OrderRoute{
    router:Router
    constructor() {
        this.router = Router();
    }
}
const OrderRouter : OrderRoute = new OrderRoute();
export default OrderRouter;
