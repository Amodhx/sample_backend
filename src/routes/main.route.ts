import express, {Router} from "express";
import ItemRouter from "./item.route";
import CustomerRouter from "./customer.route";
import OrderRouter from "./order.route";
import AuthRoute from "./auth.route";

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
        this.router.use('/auth',AuthRoute.route)
    }
}
const MainRouter:MainRoute = new MainRoute();
export default MainRouter;