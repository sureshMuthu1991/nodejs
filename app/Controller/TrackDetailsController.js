var TrackDetails = require('../models/trackDetails');

exports.postTrackDetails = function(req, res){
    var trackDetails = new TrackDetails({
        deviceId:req.body.deviceId,
        source:req.body.source,
        destination:req.body.destination,
        mile:req.body.mile,
        vehicleName:req.body.vehicleName
    });
    trackDetails.save(function(err, data){
        if(err) {
            res.send(err);
        }
        res.send(data);
    });
};

exports.getTrackDetails = function(req, res){
    TrackDetails.find(function(err, data){
        if(err){
            res.send(err);
        }
        res.send(data);
    });
};

exports.putTrackDetails = function(req, res){
    TrackDetails.findOneAndUpdate({_id:req.body.id},
    {
        $set:
        {
            deviceId:req.body.deviceId,
            source:req.body.source,
            destination:req.body.destination,
            mile:req.body.mile,
            vehicleName:req.body.vehicleName
        },
    },{upsert: true, new: true},function(err, data){
        if(err){
            res.send(err);
        }
        res.send(data);
    });
};

exports.deleteTrackDetails = function(req, res){
    TrackDetails.findByIdAndRemove(req.params.id, function (err){
        if(err){
            return res.send(err);
        }
        res.json({message:'TrackDetails deleted'});
    });
};