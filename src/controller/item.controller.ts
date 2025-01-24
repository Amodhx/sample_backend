import ItemService from "../service/item.service";

class ItemController{
    itemService:ItemService
    constructor(itemService:ItemService) {
        this.itemService = itemService;
    }
}
export default ItemController