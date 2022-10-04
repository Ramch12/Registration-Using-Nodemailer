const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/User')
.then(()=>{
    console.log("Succesfully connected");
})
.catch((err)=>{
    console.log("Not Connected");
});