const dotenv = require('dotenv');


dotenv.config();
//this will call the .env file

module.exports = {
    PORT:process.env.PORT
}