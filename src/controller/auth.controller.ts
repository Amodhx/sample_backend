import authService from "../service/auth.service";
import Auth_service from "../service/auth.service";

class AuthController{
    async signIn(req,resp){
        const data = req.body;
        resp.status(201).send(await Auth_service.signIn(data))
    }
    async signUp(req,resp){
        const data = req.body;
        resp.status(201).send(await Auth_service.signUp(data))
    }
}
const Auth_controller = new AuthController();
export default Auth_controller