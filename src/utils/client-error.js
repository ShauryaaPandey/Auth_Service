const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ClientError extends AppError{
    constructor(name,message,explanation,statusCode){
        //calling const of AppError class
        super(
            name,
            message,
            explanation,
            BAD_REQUEST
        );

    }
}

module.exports = ClientError;