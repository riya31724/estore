const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  role: { type: String, default: 'user' },
}, { timestamps: true });

// Prevent OverwriteModelError
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
