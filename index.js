var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('underscore');
var Twitter = require('twitter');
var config = require('./config');
 
var client = new Twitter({
      consumer_key: config.consumer_key,
      consumer_secret: config.consumer_secret,
      access_token_key: config.access_token_key,
      access_token_secret: config.access_token_secret
});     

// var params = {screen_name: 'AiLiLondon'};
var params = {screen_name: 'victorkane'};


// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// for serving json api (stub included below)
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'))

// server-side router
var router = express.Router();

// some doc data to serve via REST api
var docs = [
    ];

// GET ./api/doc
router.get('/doc', function(req, res) {
    // console.log("request", res);
	res.send(docs);
})

// GET ./api/doc/:id
router.get('/doc/:id', function(req, res) {
    // console.log("request", req);
    res.send(_.where(docs, {
        id: req.params.id
    }));
})

router.get('/tweet', function(req, res) {
    // console.log("request", res);
    // res.send(docs);
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error) {
              res.send(tweets);
                }
        else {
          res.send(error);
        }
    });

})

// GET ./api/tweet/:screen_name
router.get('/tweet/:screen_name', function(req, res) {
    var screen_name_params = {screen_name: req.params.screen_name};
    client.get('statuses/user_timeline', screen_name_params, function(error, tweets, response){
        if (!error) {
              res.send(tweets);
                }
        else {
          res.send(error);
        }
    });

})

app.use('/api', router);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

var server = app.listen(app.get('port'), url, function() {
	console.log('Static server listening url %s on port %s', url, server
			.address().port);
})