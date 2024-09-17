
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testapp1');

const userSchema=mongoose.Schema({
   image:String,
   email:String,
   name:String
})


let user= mongoose.model('user',userSchema);
module.exports=user;