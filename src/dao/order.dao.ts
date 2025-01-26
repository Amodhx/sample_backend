import OrderModel from "../model/order.model";
import prisma from "../../prisma/client";

class OrderDao{

    async create(orderModel: OrderModel) {
        try {
            // Create the order first
            const order = await prisma.order.create({
                data: {
                    OrderID: orderModel.order_id,
                    CustomerID: orderModel.customer_id,
                    OrderDate: new Date().toISOString(), // Set the current date or pass a custom date
                    orderdetails: {
                        create: orderModel.item_ids.map(item_id => ({
                            ItemID: item_id,
                        })),
                    },
                },
            });

            console.log('Order created successfully:', order);
            return order;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    }

}
export default OrderDao