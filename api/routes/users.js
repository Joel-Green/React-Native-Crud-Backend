const express = require('express');
const router = express.Router();

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
})

module.exports = router;