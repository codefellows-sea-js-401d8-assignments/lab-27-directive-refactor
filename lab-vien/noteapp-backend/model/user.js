'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let userSchema = mongoose.Schema({
  username: String,
  basic: {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  },
  role: {type: String, default: 'basic', required: true}
});

userSchema.methods.generateToken = function() {
  return jwt.sign({idd: this.basic.email, username: this.username}, process.env.APP_SECRET);
};

userSchema.methods.generateHash = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 8, (err, data) => {
      if (err) return reject(err);
      this.basic.password = data;
      resolve({token: this.generateToken()});
    });
  });
};

userSchema.methods.comparePassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.basic.password, (err, data) => {
      if (err) return reject(err);
      if (data === false) return reject(new Error('Password did not match'));
      resolve({token: this.generateToken()});
    });
  });
};

module.exports = exports = mongoose.model('User', userSchema);
