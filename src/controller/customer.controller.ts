import CustomerService from "../service/customer.service";
import CustomerModel from "../model/customer.model";

const customerService = new CustomerService();
class CustomerController{

    async saveCustomer(req,resp){
        const customerData = req.body;
        const data = new CustomerModel(
            customerData.customer_id,
            customerData.first_name,
            customerData.last_name,
            customerData.address,
            customerData.contact_number);
        console.log(customerService)
        const respObj = await customerService.saveCustomer(data);
        resp.status(201).send(respObj);
    }
    async deleteCustomer(req,resp){
        const data = await customerService.deleteCustomer(req.query['id']);
        resp.status(201).send(data)
    }
    async updateCustomer(req,resp){
        const customerData = req.body;
        const data = new CustomerModel(
            customerData.customer_id,
            customerData.first_name,
            customerData.last_name,
            customerData.address,
            customerData.contact_number);
        console.log(customerService)
        const respObj = await customerService.updateCustomer(data);
        resp.status(201).send(respObj);
    }
    async getAllCustomers(req,resp){
        resp.status(201).send(await customerService.getAllCustomers())
    }
    async getCustomerById(req,resp){
        const data = await customerService.getCustomerById(req.query['id'])
        resp.status(201).send(data);
    }
}
export default CustomerController