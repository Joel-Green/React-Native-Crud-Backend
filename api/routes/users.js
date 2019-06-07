const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/userSchema')

router.get('/',(req,res,next)=>{
    User.find((err,users)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(users);
        }
    })
});

router.post('/add',(req,res)=>{
    // console.log("Node add");
    // let UserIn = new User(req.body);
    // UserIn.save()
    //     .then(UserIn => {
    //         res.status(200).json({ 'User' : })
    //     })
    
    let UserIn = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username
    })
    UserIn.save()
    .then(
        result=>{ console.log(result);
        })
    .catch(err=> console.log(err));
    let username = new User(req.body);  
    const userin = {
        username : req.body.username
    } 
    res.status(201).json({
        createdUser: UserIn
    })


 })



module.exports = router;