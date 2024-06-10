//importing express
const express = require('express')
const mongoose = require("mongoose")
// const Signup = require("./Signup") // Importing Signup model
const cors = require('cors')
const cardModel = require("./mode")
const Feedback = require('./feedback');
const foodModel = require("./model")
const payModel = require("./pay");
const cardModel1 = require('./card1');
const cardModel2 = require('./card2');


// 2.initalization
const app = express();

// middelwere || passing the parameter
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//api creation
app.get('/ajay', (req, res) => {
    res.send("I am ajay");
});

//  api for adding data
app.post('/add', async (req, res) => {
    var result = await new foodModel(req.body);
    result.save();
    res.send("data added");
});

//api for login
app.post("/login", (req, res) => {
    const { oname, opass } = req.body;
    foodModel.findOne({ oname: oname })
        .then(user => {
            if (user) {
                if (user.opass === opass) {
                    res.json("success");
                } else {
                    res.json("password is incorrect");
                }
            } else {
                res.json("no data existed");
            }
        })
        .catch(err => console.log(err));
});

// code to add data to card
app.post('/add1',async(req,res)=>{
    var data = await new cardModel(req.body)
    data.save()
    res.send("data added")
})

//to view the card deytails
app.get('/view',async(req,res)=>{
    let data = await cardModel.find()
    res.json(data)
    console.log("data view")
})



// 4.port
app.listen(3006, () => {
    console.log("port 3006 is up and running");
});

   
  
    //updating
    app.get('/Update',async (req, res)=> {
        var data = await Food.find()
        res.json(data)
        console.log(data)
      })
      
      // Deleting a data
      app.delete('/remove/:id',async(req,res)=>{
        console.log(req.params);
        let id = req.params.id
        await cardModel.findByIdAndDelete(id);
        res.send("Deleted")
      
      })
      
      app.put('/edit/:id',async(req,res)=>{
        let id = req.params.id
        await cardModel.findByIdAndUpdate(id,req.body);
        res.send("updated")
        })



          // API for submitting feedback
app.post('/feedback', async (req, res) => {
    const { name, email, rating, message } = req.body;
    const feedback = new Feedback({ name, email, rating, message });
    feedback.save()
      .then(() => {
        res.status(201).json({ message: 'Feedback submitted successfully' });
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ error: 'An error occurred while submitting feedback' });
      });
  });


    // API for retrieving feedback
    app.get('/feedback', async (req, res) => {
        Feedback.find()
          .then(feedback => {
            res.json(feedback);
          })
          .catch(error => {
            console.error('Error retrieving feedback:', error);
            res.status(500).json({ error: 'An error occurred while retrieving feedback' });
          });
      });
    
      //api for payment

      app.post('/pay', async (req, res) => {
        var result = await new payModel(req.body);
        result.save();
        res.send("payment added");
    });


    //card1

app.get('/view1',async(req,res)=>{
  let data = await cardModel1.find()
  res.json(data)
  console.log("data view1")
})

    //card1 update

    // app.get('/Update',async (req, res)=> {
    //   var data = await Food.find()
    //   res.json(data)
    //   console.log(data)
    // })

    //card11 data add
    app.post('/card11',async(req,res)=>{
      var data = await new cardModel1(req.body)
      data.save()
      res.send("data added")
  })
    
    // Deleting a data car1
    app.delete('/remove1/:id',async(req,res)=>{
      console.log(req.params);
      let id = req.params.id
      await cardModel1.findByIdAndDelete(id);
      res.send("Deleted card1")
    
    })
    
    app.put('/edit1/:id',async(req,res)=>{
      let id = req.params.id
      await cardModel1.findByIdAndUpdate(id,req.body);
      res.send("updated card1")
      })


            //card2

app.get('/view2',async(req,res)=>{
  let data = await cardModel2.find()
  res.json(data)
  console.log("data view2")
})


       //card2 data add
    app.post('/card2',async(req,res)=>{
      var data = await new cardModel2(req.body)
      data.save()
      res.send("data added")
  })
    
    // Deleting a data car2
    app.delete('/remove2/:id',async(req,res)=>{
      console.log(req.params);
      let id = req.params.id
      await cardModel2.findByIdAndDelete(id);
      res.send("Deleted card2")
    
    })
    
    app.put('/edit2/:id',async(req,res)=>{
      let id = req.params.id
      await cardModel2.findByIdAndUpdate(id,req.body);
      res.send("updated card2")
      })