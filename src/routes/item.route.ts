import {Router} from "express";
import ItemController from "../controller/item.controller";
import ItemService from "../service/item.service";
import ItemDao from "../dao/item.dao";
import itemService from "../service/item.service";

class ItemRoute{
    router:Router
    itemController:ItemController
    itemService:ItemService
    itemDao:ItemDao
    constructor() {
        this.router = Router();
        this.itemDao = new ItemDao();
        this.itemService = new ItemService(this.itemDao);
        this.itemController = new ItemController(this.itemService);
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const ItemRouter:ItemRoute = new ItemRoute();
export default ItemRouter;