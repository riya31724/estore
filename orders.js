const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { auth, admin } = require('../middleware/auth');

router.post('/', auth, async (req,res) => {
  const { orderItems, totalPrice, paymentMethod } = req.body;
  if(!orderItems || orderItems.length===0) return res.status(400).json({message:'Cart empty'});
  const order = await Order.create({ user: req.user._id, orderItems, totalPrice, paymentMethod });
  res.status(201).json(order);
});

router.get('/myorders', auth, async (req,res) => {
  const orders = await Order.find({user:req.user._id}).populate('orderItems.product','name price image');
  res.json(orders);
});

// admin view all
router.get('/', auth, admin, async (req,res) => {
  const orders = await Order.find().populate('user','name email').sort({createdAt:-1});
  res.json(orders);
});

module.exports = router;
