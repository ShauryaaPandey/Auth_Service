const validateUsersAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success : false,
            data : {},
            message : "something went wrong ",
            err : "Email or password missing in the request",

        });
    }
    next();
}

const validateAdminReq = (req,res,next)=> {
    if(!req.body.id){
        return res.status(400).json({
            success : false,
            data : {},
            message : "something went wrong ",
            err : "User id not given",
        });
    }
    next();
}

module.exports = {
    validateUsersAuth,
    validateAdminReq
}
