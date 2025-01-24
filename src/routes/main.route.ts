import express, {Router} from "express";
import ItemRouter from "./item.route";
import CustomerRouter from "./customer.route";
import OrderRouter from "./order.route";

class MainRoute{
    router : Router
    constructor() {
        this.router = Router();
        this.initialRoutes();

    }
    initialRoutes(){
        this.router.use('/customer',CustomerRouter.router)
        this.router.use('/item',ItemRouter.router)
        this.router.use('/order',OrderRouter.router)
    }
}
const MainRouter:MainRoute = new MainRoute();
export default MainRouter;