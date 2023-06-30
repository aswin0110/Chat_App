const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const bcrypt = require('bcrypt')

const app = express()
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json())

PORT = 3005


// DB require
require('./config/database')

// signupmodel
const signupModel = require('./model/signupmodel')

// signup api
app.post('/api/signup',async (req,res)=>{
    
    let signupdata = req.body
    let signupemail = req.body.email
    let signupusername = req.body.username

    try {
        
        let usernamesearch = await signupModel.find({username:signupusername})
        
        let datasearch = await signupModel.find({email:signupemail})
        // console.log("DEARCHED DATA: "+datasearch);

        if(datasearch=='' && !signupemail == '' ){
            console.log("BODY DATA : "+signupdata);

            if(usernamesearch==''){
                let signupdatasave = new signupModel(signupdata)
                await signupdatasave.save()
                res.json({status:'1'})
                console.log('one singup data added to DB');
                console.log("SUCCESS DATA: "+signupdatasave);
            }
            else{
                res.json({status:'3'})
                console.log('username alredy exist');
            }


        }

        else{
            res.json({status:'2'})
            console.log("data alredy exist");
            // console.log("ERROR data: "+datasearch);

        }

        
    } catch (error) {
        console.log(error.message);
        
    }
})




// login api
app.post('/api/login', async (req,res)=>{

    try {
        let emailid = req.body.email
        let passworddb = req.body.password
 
        console.log(req.body);

        
        let data = await signupModel.findOne({email:emailid})

        if( data!==null ){ 
            // console.log('email recognised');
            console.log(data);
            const isPasswordMatch = await bcrypt.compare(passworddb, data.password);
            console.log(isPasswordMatch);
            if (isPasswordMatch){
                res.json({status:'1'})

            }
            else{
                res.json({status:'password not matches'})
                console.log('2');
            }
        
        }
        else{
            res.json({status:'3'})
            // console.log('Please check email or signup');
        }


    } catch (error) {
        console.log(error);
    }
})














app.listen(PORT,()=>{
    console.log(`_________SERVER STARTED ${PORT}_________`);
})