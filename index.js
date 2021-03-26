const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true } );

const fruitSchema = new mongoose.Schema({
   name:{ 
       type:String,
       required:[true, "enter name"]
   },   
   rating:{
    type: Number,
    min:1,
    max:10,
   },
   review:String
});


const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name:"apple",
    rating:4,
    review:"great"

});



//fruit.save();


const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
 });
 
 
 const Person = mongoose.model("Person", personSchema);
 const mango = new Fruit({
     name:"mango",
     rating:9,
     review:"good",
 });
 mango.save();
 Person.updateOne({name:"john"}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("updated");
        }
    });
    
//  const person = new Person({
//      name:"john",
//      age:20,
//      favouriteFruit:mango,
//  });

 //person.save();

 const kiwi = new Fruit({
    name:"kiwi",
    rating:3,
    review:"great"
 });
 const orange = new Fruit({
    name:"orange",
    rating:7,
    review:"great"
 });
 const bannana = new Fruit({
    name:"bannana",
    rating:9,
    review:"great"
 });

 Fruit.insertMany([kiwi,orange,bannana], function(err){
      if(err){
          console.log(err);
      }
      else{
          console.log("success");
      }
 });

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id:"6000b4c918698029f8adb5f1"},{name:"peach"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("updated");
//     }
// });

// Fruit.deleteOne({name:"apple"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted");
//     }
// });

// Person.deleteMany({name:"basma"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted");
    
// }
// });