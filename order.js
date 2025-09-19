const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  product:{type: mongoose.Schema.Types.ObjectId, ref:'Product'},
  name:String,
  qty:Number,
  price:Number
});
const orderSchema = new mongoose.Schema({
  user:{type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  orderItems:[orderItemSchema],
  totalPrice:Number,
  paymentMethod:{type:String, default:'COD'},
  status:{type:String, enum:['Placed','Shipped','Delivered','Cancelled'], default:'Placed'}
},{timestamps:true});
module.exports = mongoose.model('Order', orderSchema);
