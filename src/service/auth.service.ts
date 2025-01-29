import UserModel from "../model/user.model";
import prisma from "../../prisma/client";

class AuthService{
    async signIn(userObj :UserModel ){


    }
    async signUp(userObj:UserModel){

    }
    async verifyUser(userObj:UserModel){
        const user = await prisma.user.findUnique({
            where:{
                userName : userObj.userName
            }
        })

        if (!user){

        }
    }
}
const Auth_service = new AuthService();
export default Auth_service;