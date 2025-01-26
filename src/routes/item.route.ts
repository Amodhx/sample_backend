import {Router} from "express";
import ItemController from "../controller/item.controller";

class ItemRoute{
    router:Router
    itemController:ItemController
    constructor() {
        this.router = Router();
        this.itemController = new ItemController();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const ItemRouter:ItemRoute = new ItemRoute();
export default ItemRouter;