
const jwt = require('jsonwebtoken');


const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({
            message : "Unauthorized access",
            success : false
        })
    }   

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        next(error)
    }

}

module.exports = authmiddleware;