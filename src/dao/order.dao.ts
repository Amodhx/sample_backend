import OrderModel from "../model/order.model";
import prisma from "../../prisma/client";

class OrderDao{

    async create(orderModel: OrderModel) {
        try {
            return await prisma.order.create({
                data: {
                    OrderID: orderModel.order_id,
                    CustomerID: orderModel.customer_id,
                    OrderDate: new Date().toISOString(),
                    orderdetails: {
                        create: orderModel.item_ids.map(item_id => ({
                            ItemID: item_id,
                        })),
                    },
                },
            });
        } catch (error) {
            throw error;
        }
    }
    async getAllOrders() {
        try {
            return await prisma.order.findMany({
                include: {
                    orderdetails: true,
                },
            });
        } catch (error) {
            throw error;
        }
    }
    async getOrderById(orderID: string) {
        try {
            const order = await prisma.order.findUnique({
                where: {
                    OrderID: orderID,
                },
                include: {
                    orderdetails: true,
                },
            });

            if (!order) {
                return null;
            }
            return order;
        } catch (error) {
            throw error;
        }
    }
    async  deleteOrder(orderID: string) {
        try {
            return await prisma.order.delete({
                where: {
                    OrderID: orderID,
                },
            });
        } catch (error) {
            throw error;
        }
    }

}
export default OrderDao