var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const url = `mongodb+srv://Belgin:Belgin.hiddensafe%40675@mongonode-cluster.8k2hi0f.mongodb.net/mongonode`;

router.get('/', function(req, res, next) {
  res.send({ message : "API is Active" });
});

router.get('/:id', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongonode");
    var query = { id : parseInt(req.params.id) };
    dbo.collection("datas").find(query).toArray(function(err, result) {
      if (err) throw res.send({ message : err });;
      res.send({ api : result });
      db.close();
    });
  });
});


module.exports = router;
