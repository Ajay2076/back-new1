const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db card 2 connected")
   
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const Card2Schema = new mongoschema({
    title: String,
    price:Number ,
    image:String
})

var cardModel2 = mongoose.model("card2",Card2Schema)
module.exports = cardModel2
