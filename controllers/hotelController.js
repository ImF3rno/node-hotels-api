const fs=require('fs')
const Hotel=require('./../models/hotelModel')
const APIFeatures=require('./../utils/apiTools')

// ==================================================================== //
//Middleware
exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.room_price){
        return res.status(400).json({
            status:'Failed',
            message:'Missing name or price'
        })
    }
    next()
}

exports.aliasTopHotels=(req,res,next)=>{
    req.query.limit='5';
    req.query.sort='-comfort,room_price';
    req.query.fields='comfort,name,address,room_price';
    next()
}
// ==================================================================== //

// ==================================================================== //
//Callbacks
exports.getAllHotels=async(req,res)=>{
    try{
        const hotelsData=new APIFeatures(Hotel.find(),req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        const hotels=await hotelsData.query;
        res.status(200).json({
            status:'Success',
            results:hotels.length,
            data:{
              hotels
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message
        })
    }
};
 
exports.createHotel=async(req,res)=>{
    try{
        const newHotel=await Hotel.create(req.body)
        res.status(201).json({
            status:'Success',
            message:'New hotel created',
            data:newHotel
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};
 
exports.getHotel=async(req,res)=>{
    try{
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json({
            status:'Success',
            data:{
                hotel
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};
 
exports.updateHotel=async(req,res)=>{
    try{
        const hotel=await Hotel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status:'Success',
            message:'Hotel Updated',
            data:{
                hotel
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};
 
exports.deleteHotel=async(req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'Success',
            message:'Hotel deleted',
            data:null
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};
// ==================================================================== //