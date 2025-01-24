import CustomerService from "../service/customer.service";

class CustomerController{
    customerService:CustomerService
    constructor(customerService:CustomerService) {
        this.customerService = customerService
    }
}
export default CustomerController