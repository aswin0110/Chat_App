const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aswinkannur1:Aswinkannur01@cluster0.amfjccq.mongodb.net/ChatAppDB?retryWrites=true&w=majority")
.then(()=>{
    console.log('__________MONGODB CONNECTED__________');
})
.catch(err=>console.log(err.message))