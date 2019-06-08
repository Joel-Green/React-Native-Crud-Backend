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

 router.get('/delete/:userId',(req,res,next)=>{
    const id = req.params.userId;

    User.findByIdAndRemove(_id = id , (err,users) =>{
        if(err)
        res.json(err)
        else 
        res.json('Sucessfully removes')
    } )


})






module.exports = router;