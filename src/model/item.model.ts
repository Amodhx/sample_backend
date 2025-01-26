class ItemModel{
    item_id:string
    brand:string
    unit_price:string
    qty:string


    constructor(item_id: string, brand: string, unit_price: string, qty: string) {
        this.item_id = item_id;
        this.brand = brand;
        this.unit_price = unit_price;
        this.qty = qty;
    }
}
export default ItemModel