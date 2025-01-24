import CustomerDao from "../dao/customer.dao";

class CustomerService{
    customerDao:CustomerDao
    constructor(customerDao:CustomerDao) {
        this.customerDao = customerDao
    }
}
export default CustomerService;