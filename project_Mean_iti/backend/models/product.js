const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    id:String,
    name:String,
    brand:String,
    type:String,
    usage:String,
    description:String,
    photo_link:String,
    price:Number,
    rating:Number,
})
module.exports= mongoose.model("Product",productSchema);