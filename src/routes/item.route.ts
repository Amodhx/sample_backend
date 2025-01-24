import {Router} from "express";

class ItemRoute{
    router:Router
    constructor() {
        this.router = Router();
    }
}
const ItemRouter:ItemRoute = new ItemRoute();
export default ItemRouter;