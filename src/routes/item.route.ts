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
        this.router.get('/getAllItems',this.itemController.getAllItems)
        this.router.post('/saveItem',this.itemController.saveItem)
        this.router.delete('/deleteItem',this.itemController.deleteItem)
        this.router.patch('/updateItem',this.itemController.updateItem)

    }
}
const ItemRouter:ItemRoute = new ItemRoute();
export default ItemRouter;