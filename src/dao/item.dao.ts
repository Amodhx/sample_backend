import ItemModel from "../model/item.model";
import prisma from "../../prisma/client";

class ItemDao{

    async  delete(itemId: string) {
        try {
            return await prisma.item.delete({
                where: {
                    ItemID: itemId,
                },
            });
        } catch (error) {
            throw error;
        }
    }
    async create(itemObj:ItemModel){
        try {
            return await prisma.item.create({
                data : {
                    ItemID : itemObj.item_id,
                    brand : itemObj.brand,
                    Price : itemObj.unit_price,
                    Quantity : itemObj.qty,
                }
            })
        }catch (err){
            throw err;
        }finally {
            await prisma.$disconnect()
        }
    }
    async  update(updatedData:ItemModel) {
        try {
            return await prisma.item.update({
                where: {
                    ItemID: updatedData.item_id,
                },
                data: {
                    brand: updatedData.brand,
                    Price: updatedData.unit_price,
                    Quantity: updatedData.qty,
                },
            });
        } catch (error) {
            throw error;
        }
    }
    async getAll(){
        try {
            return await prisma.item.findMany();
        } catch (error) {
            throw error;
        }
    }


}
export default ItemDao