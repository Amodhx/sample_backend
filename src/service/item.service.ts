import ItemDao from "../dao/item.dao";

class ItemService{
    itemDao:ItemDao
    constructor(itemDao:ItemDao) {
        this.itemDao = itemDao;
    }
}
export default ItemService;
