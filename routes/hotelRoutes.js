const express=require('express')
const hotelController=require('./../controllers/hotelController');
const authContoller=require('./../controllers/authContoller')
const router=express.Router();

router.route('/top-5-hotels')
    .get(hotelController.aliasTopHotels,hotelController.getAllHotels)
router.route('/')
    .get(authContoller.protect,hotelController.getAllHotels)
    .post(hotelController.checkBody, hotelController.createHotel)
router.route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel)

module.exports=router