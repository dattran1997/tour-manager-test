const TourModel = require('./model');
const express = require('express');

const tourRoute = express.Router();

tourRoute.get('/:id',async function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    try{   

        const tour = await TourModel.findOne({_id: id});
        res.json({
            success:true,
            tour: tour,
        });
    }catch(error){
        res.json({
            success:false,
            message:error
        });
    }
});

module.exports = tourRoute;