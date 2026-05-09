
const mongoose = require('mongoose');

const userCredentialsSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    leetcodeUsername : {
        type : String,
        default : ''
    },
    codeforcesUsername : {
        type : String,
        default : ''
    }
    
},{
    timestamps : true
});

module.exports = mongoose.model('User', userCredentialsSchema);