const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db pay connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const paySchema = new mongoschema({
    name:String,
    phoneNumber:Number,
    address:String
   
})

var payModel = mongoose.model("pay",paySchema)
module.exports = payModel