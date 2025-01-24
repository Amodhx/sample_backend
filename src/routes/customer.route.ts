import {Router} from "express";

class CustomerRoute{
    router:Router
    constructor() {
        this.router = Router();
    }
}
const CustomerRouter:CustomerRoute = new CustomerRoute();
export default CustomerRouter