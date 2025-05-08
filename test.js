const express=require('express');
const mongoose= require('mongoose');
const app=express();

const mongoIRL = 'mongodb+srv://flyingtoilet97:yCizzlNpN9PElygX@cluster0.irgu22p.mongodb.net/Cluster0';

mongoose.connect(mongoIRL).then((result)=> console.log('connected to db')).catch((err)=> console.log(err));
