const { statusCode} = require('http-status-codes');
class AppErrors extends Error{
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'Something went wrong',
        statusCode = this.statusCode.INTERNAL_SERVER_ERROR
        ){
            //error class k constructor call krna jruri h
        super();
        this.message = message,
        this.explanation = explanation,
        this.name = name,
        this.statusCode = statusCode
    }
}

module.exports = AppErrors;