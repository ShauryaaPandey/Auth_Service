const UserRepository = require('../repository/user-repository');

const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/server_config');
const bcrypt = require('bcrypt');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    // async destroy(){
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    async signIn(email,password){
            try {
                //step 1 -> fetch user using email
                const user = await this.userRepository.getByEmail(email);

                //step 2 -> comparing the password/checking
                const passwordMatch = this.checkPassword(password,user.password);
                if(!passwordMatch){
                    console.log("Password doesnt match");
                    throw {error : "Incorrect password"};
                }

                //step 3->if pass matched then create the token and sent it to the user

                const newjwt = this.createToken({email : user.email , id:user.id});
                return newjwt;

            } catch (error) {
                console.log("Something went wrong in the sign in process");
                throw error;
            }

    }


    createToken(user){//sync fxn can also work
        try {
            // console.log("JWT_KEY : ",JWT_KEY);
            const result = jwt.sign(user,JWT_KEY , {expiresIn : '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in the Token creation");
            throw error;
        }
    }

    verifyToken(token){
            try {
                const response = jwt.verify(token,JWT_KEY);
                return response;
            } catch (error) {
                console.log("Something went wrong in the token validation" , error);
               throw error;
            }
    }

    checkPassword(userInputPlainPassword , encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
}

module.exports = UserService;