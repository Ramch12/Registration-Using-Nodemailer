const mongoose=require('mongoose');
const NewUser=new mongoose.Schema({
    UserID:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required:true
    }
});

const USER=mongoose.model('collection_1',NewUser);
module.exports=USER;