import ItemService from "../service/item.service";
import ItemModel from "../model/item.model";

const itemService = new ItemService();
class ItemController{
    async saveItem(req,resp){
        const itemData = req.body;
        const item =  new ItemModel(
            itemData.item_id,
            itemData.brand,
            itemData.unit_price,
            itemData.qty
        )
        resp.status(201).send(await itemService.saveItem(item))
    }
    async updateItem(req,resp){
        const itemData = req.body;
        const item =  new ItemModel(
            itemData.item_id,
            itemData.brand,
            itemData.unit_price,
            itemData.qty
        )
        resp.status(201).send(await itemService.updateItem(item))
    }
    async deleteItem(req,resp){
        resp.status(201).send(await itemService.deleteItem(req.query['id']))
    }
    async getAllItems(req,resp){
        resp.status(201).send(await itemService.getAllItems());
    }

}
export default ItemController