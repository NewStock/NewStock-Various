var express = require('express');
var Twitter = require('twitter');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var client = new Twitter({
	  consumer_key: '5oj8PAzH8A5DzeGb1YJGXLIF6',
	  consumer_secret: 'SVJ4gMJYTFGmWanZYRlBZCTMiDIvFsyLSot7XNktLwbFvFtCa9',
	  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAAq0xwAAAAAAX0NfRbkAIhND7dNFQnTZNvUKjXQ%3DBpK5Ejmhuqxz74S8Gf8lnT9MXJQnKZFkVmk36XAEi11U6PTkdx'
	});

	client.get('search/tweets', {q: req.query.tag}, function(error, tweets, response) {
	   res.send(tweets);
	});
	
  //res.send(client);
});

module.exports = router;
