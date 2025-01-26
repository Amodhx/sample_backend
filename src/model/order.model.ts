class OrderModel{

    order_id:string
    customer_id:string
    item_ids: string[]

    constructor(order_id: string, customer_id: string, item_ids: string[]) {
        this.order_id = order_id;
        this.customer_id = customer_id;
        this.item_ids = item_ids;
    }
}
export default OrderModel