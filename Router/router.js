const express=require('express');
const CreateUSer=require('../Controllers/controllers')
const Route=express.Router();


Route.post('/Regi',CreateUSer);


module.exports=Route;

