var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("INCOMING REQUEST: " + req.method + " " + req.url);
  res.writeHead(200, {"Content-Type": "application/json" });
  res.end(JSON.stringify({ error: null }) + "\n"); 
});

module.exports = router;
