const express=require('express');
const app=express();
app.use(express.json())
const hotelRoutes=require('./routes/hotelRoutes')
const userRoutes=require('./routes/userRoutes')
const morgan=require('morgan') 

app.use(morgan('dev'));

// ==================================================================== //
// Mounting router
app.use('/api/v1/hotels',hotelRoutes);
app.use('/api/v1/users',userRoutes);
// ==================================================================== //

module.exports=app;