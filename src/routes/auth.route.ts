import {Router} from "express";
import authController from "../controller/auth.controller";

class AuthRoute{
    route:Router
    constructor() {
        this.route = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.route.post('/signIn',authController.signIn)
        this.route.post('/signUn',authController.signUp)
    }


}
const AuthRouter = new AuthRoute();
export default AuthRouter;