const express=require('express');
const router=express.Router()
const {generateToken}=require('./paymentController');

router.get('/generate/token',generateToken);
module.exports=router;