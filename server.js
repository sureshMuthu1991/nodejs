var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var secureRoutes = express.Router();

var trackDetailsController = require('./app/Controller/TrackDetailsController');
var athenticateCont = require('./app/Controller/authenticate');

process.env.SECURET_KEY = "mybadasskey";

mongoose.connect('mongodb://localhost:27017/GPS');
mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
     // load our public/index.html file
    res.sendfile('./dist/index.html');
});
var router = express.Router();
var port = process.env.PORT || 3000;

app.use('/api', router);

router.route('/trackDetails/create').post(trackDetailsController.postTrackDetails);
router.route('/trackDetails/get').get(trackDetailsController.getTrackDetails);
router.route('/trackDetails/update').put(trackDetailsController.putTrackDetails);
router.route('/trackDetails/:id').delete(trackDetailsController.deleteTrackDetails);


router.route('/authenticate/get').get(athenticateCont.authenticate);

app.listen(port);
