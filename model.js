const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const FoodSchema = new mongoschema({
    oname:String,
    onumber:Number,
    omail:String,
    opass:String
})

var foodModel = mongoose.model("food",FoodSchema)
module.exports = foodModel