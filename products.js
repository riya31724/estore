const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { auth, admin } = require('../middleware/auth');

router.get('/', async (req,res) => {
  const products = await Product.find();
  res.json(products);
});

router.get('/:id', async (req,res) => {
  const product = await Product.findById(req.params.id);
  if(!product) return res.status(404).json({message:'Not found'});
  res.json(product);
});

// admin
router.post('/', auth, admin, async (req,res) => {
  const {name,description,price,image,category,stock} = req.body;
  const p = await Product.create({name,description,price,image,category,stock});
  res.json(p);
});

router.put('/:id', auth, admin, async (req,res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(updated);
});

router.delete('/:id', auth, admin, async (req,res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({message:'Deleted'});
});

module.exports = router;
