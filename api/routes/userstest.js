const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get test'
    })
})

router.get('/:userId',(req,res,next)=>{
    const id = req.params.userId;
    res.status(200).json({
        message:`get test id passed is ${id}  `
    })
})

router.patch('/:userId',(req,res,next)=>{
    const id = req.params.userId;
    res.status(200).json({
        message:`get test id updated is ${id}  `
    })
})

router.delete('/:userId',(req,res,next)=>{
    const id = req.params.userId;
    res.status(200).json({
        message:`get test id deleted is ${id}  `
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'post test'
    })
})

module.exports = router;