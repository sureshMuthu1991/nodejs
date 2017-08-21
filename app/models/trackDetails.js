var mongoose = require('mongoose');

var trackDetails = new mongoose.Schema({
    deviceId:{
        type:String, 
        required:true
    },
    source:{
        type:String, 
        required:true
    },
    destination:{
        type:String, 
        required:true
    },
    dateAndTime:{ 
        type: Date, 
        default: Date.now 
    },
    mile:{type:String, 
        required:true
    },
    vehicleName:{type:String, 
        required:true
    },
});


module.exports = mongoose.model('TrackDetail', trackDetails);