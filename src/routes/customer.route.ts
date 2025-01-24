import {Router} from "express";
import CustomerController from "../controller/customer.controller";
import CustomerService from "../service/customer.service";
import CustomerDao from "../dao/customer.dao";
import customerService from "../service/customer.service";
import customerDao from "../dao/customer.dao";

class CustomerRoute{
    router:Router
    customerController:CustomerController;
    customerService:CustomerService;
    customerDao:CustomerDao
    constructor() {
        this.router = Router();
        this.customerDao = new CustomerDao();
        this.customerService = new CustomerService(this.customerDao)
        this.customerController = new CustomerController(this.customerService);
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const CustomerRouter:CustomerRoute = new CustomerRoute();
export default CustomerRouter