const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();
//this will call the .env file

module.exports = {
    PORT:process.env.PORT,
    SALT : 10
}