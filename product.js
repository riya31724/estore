const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // store image URL
  category: String,
  stock: { type: Number, default: 0 },
}, { timestamps: true });

// Prevent OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
