import {Router} from "express";

class ItemRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const ItemRouter:ItemRoute = new ItemRoute();
export default ItemRouter;