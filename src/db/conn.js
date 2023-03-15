const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
//connection creation and new data base creator---creating database
mongoose.connect("mongodb://0.0.0.0/olympics",{ useNewUrlParser: true, useNewUrlParser : true})
.then( ()=>{
	console.log("connection successfull....")
}).catch((err)=> console.log("No Connection "));