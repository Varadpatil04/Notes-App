const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Noteschema = new Schema({
 user : {
    type : Schema.ObjectId,
    ref : 'User',
 },
 title : {
    type : String,
    requried : true,
 },
 body : {
    type : String,
    requried : true,
 },
 createdAt : {
    type : Date,
    default : Date.now
},
 updatedAt : {
    type : Date,
    default : Date.now
 }
});


module.exports = mongoose.model( 'Note', Noteschema );