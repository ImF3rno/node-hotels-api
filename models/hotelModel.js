const mongoose=require('mongoose')

const hotelShema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A hotel must have a name'],
        unique:true
    },
    address:{
        type:String,
        required:[true,'A hotel must have an address']
    },
    ranking_average:{
        type:Number,
        default:4.5,
        min:[1,'Ranking must be above 1'],
        max:[5,'Ranking must be under 5']
    },
    room_price:{
        type:Number,
        required:[true,'A hotel room must have a room price']
    },
    price_discount:{
        type:Number
    },
    comfort:{
        type:String,
        required:[true,'A hotel must have a level of stars'],
        enum:{
            values:['1','2','3','4','5','6','7']
        }
    },
    summary:{
        type:String,
        trim:true,
        required:[true,'A hotel must have a summary']
    },
    description:{
        type:String,
        trim:true
    },
    image_cover:{
        type:String,
        required:[true,'A hotel must have an image cover']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    }
});

const Hotel=mongoose.model('Hotel',hotelShema);

module.exports=Hotel;