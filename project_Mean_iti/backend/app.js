const mongoose = require("mongoose");
const express=require ("express"); 

const Product=require("./models/product");
const User = require("./models/user");

const server = express()
server.use(express.urlencoded({extended:true}));
server.use(express.json());

mongoose.connect("mongodb+srv://pharmacy:mnh123@cluster1.jjj0nxo.mongodb.net/test")
.then(()=>{
    console.log("Connected successfully")
}).catch(()=>{
    console.log("Failed");
});

//pharmacy products
server.get("/products",function(req,res){
    Product.find().then((productData)=>{
        res.send(productData);
    }).catch((err)=>{
        res.send({
            error:"Error Getting all products"
        })
    })
});

server.delete("/products/:id", function (req, res) {
    let prodId = req.params.id;
    Product.deleteOne({ _id: prodId })
      .then((msg) => {
        res.send({
          msg: "product deleted successfuly",
        });
      })
      .catch((err) => {
        console.log(err);
      });
});


server.post("/addProduct",function(req, res){
    let data = req.body;
    let newProduct= new Product({
        name:data.name,
        brand:data.brand,
        type:data.type,
        usage:data.usage,
        description:data.description,
        photo_link:data.photo_link,
        price:+data.price,
        rating:+rating,
    });

    newProduct
    .save()
    .then((msg) => {
      res.send({
        msg: "product added successfuly",
      });
    })
    .catch((err) => {
      console.log(err);
    });
})
server.put("/product/edit/:id",function(req,res){
  let data = req.body;
  let pid = data.id;
  Product.updateOne({
    _id: pid
  },{
    name:data.name,
    brand:data.brand,
    type:data.type,
    usage:data.usage,
    description:data.description,
    photo_link:data.photo_link,
    price: +data.price,
    rating: +data.rating,
  }).then((msg)=>{
    msg:"Updated successfully";
  }).catch(err=>{
    err:"Error updating";
  });
});
//user


server.get("/user",function(req,res){
  User.find()
  .then((data)=>res.send(data))
    .catch(res.send({
        Error: "Error Getting users data"
    }))
})
server.listen(4000, () => {
   console.log("Server is listening on port 4000");
  });
// const mongoose = require("mongoose");
// const express = require("express");
// const bodyParser = require("body-parser"); // Add body-parser middleware

// const Product = require("./models/product");
// const User = require("./models/user");

// const server = express();

// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());

// mongoose
//   .connect("mongodb+srv://pharmacy:mnh123@cluster1.jjj0nxo.mongodb.net/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected successfully");
//   })
//   .catch(() => {
//     console.log("Failed");
//   });

// // Pharmacy products
// server.get("/products", function (req, res) {
//   Product.find()
//     .then((productData) => {
//       res.send(productData);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: "Error Getting all products",
//       });
//     });
// });

// server.delete("/products/:id", function (req, res) {
//   let prodId = req.params.id; // Use req.params.id directly
//   Product.deleteOne({ _id: prodId }) // Use _id instead of id
//     .then((msg) => {
//       res.send({
//         msg: "Product deleted successfully",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({
//         error: "Error deleting product",
//       });
//     });
// });

// server.post("/addProduct", function (req, res) {
//   let data = req.body;
//   let newProduct = new Product({
//     name: data.name,
//     brand: data.brand,
//     type: data.type,
//     usage: data.usage,
//     description: data.description,
//     photo_link: data.photo_link,
//     price: +data.price,
//     rating: +data.rating, // Define the rating variable
//   });

//   newProduct
//     .save()
//     .then(() => {
//       res.send({
//         msg: "Product added successfully",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({
//         error: "Error adding product",
//       });
//     });
// });

// server.put("/product/edit/:id", function (req, res) {
//   let data = req.body;
//   let pid = data.id;
//   Product.updateOne(
//     {
//       _id: pid,
//     },
//     {
//       name: data.name,
//       brand: data.brand,
//       type: data.type,
//       usage: data.usage,
//       description: data.description,
//       photo_link: data.photo_link,
//       price: +data.price,
//       rating: +data.rating,
//     }
//   )
//     .then(() => {
//       res.send({
//         msg: "Updated successfully",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({
//         error: "Error updating product",
//       });
//     });
// });

// // User
// server.get("/user", function (req, res) {
//   User.find()
//     .then((data) => res.send(data))
//     .catch(() => {
//       res.status(500).send({
//         Error: "Error Getting users data",
//       });
//     });
// });

// server.listen(4000, () => {
//   console.log("Server is listening on port 4000");
// });
