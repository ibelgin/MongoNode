var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const functions = require('./functions');

const url = `mongodb+srv://Belgin:Belgin.hiddensafe%40675@mongonode-cluster.8k2hi0f.mongodb.net/mongonode`;

router.get('/', async function (req, res, next) {
  functions.checkAPIActive(res)
});

router.get('/userData/:id', async function (req, res, next) {
  MongoClient.connect(url, (err, db) => functions.getDataByID(err, db, req, res))
});

module.exports = router;