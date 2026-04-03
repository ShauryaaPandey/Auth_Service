const AppError = require('./error-handler');
const { statusCode, StatusCodes } = require('http-status-codes');

class ValidationError extends AppError{
    constructor(error){
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach(element => {
            explanation.push(error.message);
        });

        //calling const of AppError class
        super(
            errorName,
            'Not able to validate the data sent in the request',
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError;