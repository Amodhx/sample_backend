import ItemDao from "../dao/item.dao";
import ItemModel from "../model/item.model";

const itemDao = new ItemDao();
class ItemService{

    async saveItem(item:ItemModel){
        return await itemDao.create(item);
    }
    async getAllItems(){
        return await itemDao.getAll();
    }
    async updateItem(item:ItemModel){
        return await itemDao.update(item)
    }
    async deleteItem(id:string){
        return await itemDao.delete(id);
    }

}
export default ItemService;
