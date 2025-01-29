import CustomerDao from "../dao/customer.dao";
import CustomerModel from "../model/customer.model";

const customerDao = new CustomerDao();
class CustomerService{

    async saveCustomer(customerObj:CustomerModel){
        return await customerDao.create(customerObj);
    }
    async getAllCustomers(){
        return await customerDao.getAllCustomers()
    }
    async getCustomerById(customerID:string){
        return await customerDao.getCustomerById(customerID);
    }
    async updateCustomer(customerObj:CustomerModel){
        return await customerDao.updateCustomer(customerObj);
    }
    async deleteCustomer(customerId:string){
        return await customerDao.deleteCustomer(customerId);
    }
}
export default CustomerService;