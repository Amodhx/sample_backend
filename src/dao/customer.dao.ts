import CustomerModel from "../model/customer.model";
import prisma from "../../prisma/client";
import customerModel from "../model/customer.model";

class CustomerDao{

    async create(customerObj:CustomerModel){
        try {
            return await prisma.customer.create({
                data: {
                    CustomerID: customerObj.customer_id,
                    firstName: customerObj.first_name,
                    lastName: customerObj.last_name,
                    Address: customerObj.address,
                    contactNumber: customerObj.contact_number,
                },
            });
        } catch (error) {
            throw error;
        } finally {
            await prisma.$disconnect();
        }
    }
    async  getAllCustomers() {
        try {
            let customers = await prisma.customer.findMany()
            let customerToReturn = []
            customers.map((customer) => {
                customerToReturn.push(new CustomerModel(customer.CustomerID, customer.firstName, customer.lastName, customer.Address, customer.contactNumber))
            })
            return customerToReturn
        } catch (error) {
            console.error('Error retrieving customers:', error);
            throw error;
        }
    }
    async  getCustomerById(customerID: string) {
        try {
            const customer = await prisma.customer.findUnique({
                where: { CustomerID: customerID },
            });
            if (customer) {
                return customer;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    async  updateCustomer(customerObj :CustomerModel) {
        const customerIdToUpdate = customerObj.customer_id
        try {
            return await prisma.customer.update({
                where: {CustomerID: customerObj.customer_id},
                data: {
                    firstName: customerObj.first_name,
                    lastName: customerObj.last_name,
                    Address: customerObj.address,
                    contactNumber: customerObj.contact_number,
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async  deleteCustomer(customerID: string) {
        try {
            return await prisma.customer.delete({
                where: {CustomerID: customerID},
            });
        } catch (error) {
            throw error;
        }
    }

}
export default CustomerDao