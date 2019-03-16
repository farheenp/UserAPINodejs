'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  firstname: {
    type: String,
    required: 'Kindly enter first name'
  },
  username:{
    type:String,
    required:'Please enter username'
  },
  password:{
    type:String,
    required:'Please enter password'
  },
  birthdate: {
    type: Date,
    default: Date.now
  },
  usertype: {
    type: [{
      type: String,
      enum: ['admin', 'user', 'staff']
    }],
    default: ['user']
  }
});

module.exports = mongoose.model('User', UserSchema);