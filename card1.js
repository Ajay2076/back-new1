const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db card connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const Card1Schema = new mongoschema({
    title: String,
    price:Number ,
    image:String
})

var cardModel1 = mongoose.model("card1",Card1Schema)
module.exports = cardModel1
