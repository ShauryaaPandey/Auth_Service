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
    createToken(user){//sync fxn can also work
        try {
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