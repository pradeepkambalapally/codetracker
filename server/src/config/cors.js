const cors = require("cors");

const configureCors = () =>{
    return cors({
        origin : (origin, callback) =>{
            const allowedOrigins = [
                "http://localhost:5173", // local domain
                process.env.CLIENT_URL // production domain
            ]

            if(!origin || allowedOrigins.indexOf(origin) !== -1){
                callback(null, true); //allowing the request
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },

        methods : ["GET", "POST", "PUT", "DELETE"],

        allowedHeaders : ["Content-Type", "Authorization", "Accept-Version" ],
        exposedHeaders : ["X-Total-Count", "Content-Range"],
        credentials : true, // enable support for cookies
        preflightContinue : false, // handle preflight requests internally
        maxAge : 600, // cache preflight response for 10 minutes -> to avoid sending preflight requests for every request
        optionsSuccessStatus : 204
    })
}

module.exports ={ configureCors}; 