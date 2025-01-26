import {Router} from "express";
import CustomerController from "../controller/customer.controller";


class CustomerRoute{
    router:Router
    customerController:CustomerController;
    constructor() {
        this.router = Router();
        this.customerController = new CustomerController();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveCustomer',this.customerController.saveCustomer)
        this.router.delete('/deleteCustomer',this.customerController.deleteCustomer)
        this.router.get('/getAllCustomers',this.customerController.getAllCustomers)
        this.router.get("/getCustomerById",this.customerController.getCustomerById)
        this.router.patch("/updateCustomer",this.customerController.updateCustomer)
    }
}
const CustomerRouter:CustomerRoute = new CustomerRoute();
export default CustomerRouter