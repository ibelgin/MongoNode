var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const functions = require('./functions.js');

const url = `mongodb+srv://Belgin:Belgin.hiddensafe%40675@mongonode-cluster.8k2hi0f.mongodb.net/mongonode`;

router.get('/', async function (req, res, next) {
  functions.checkAPIActive(res)
});

router.get('/userData/:id', async function (req, res, next) {
  MongoClient
    .connect(url)
    .then((client) =>
        functions.getDataByID(client , req , res ))
    .catch((err) => res.send({ api : err }))
});

router.patch('/updateData/:id', async function (req, res, next) {
  MongoClient
    .connect(url)
    .then((client) =>
        functions.updateDataByID(client , req , res ))
    .catch((err) => res.send({ api : err }))
}); 

router.delete('/deleteData/:id', async function (req, res, next) {
  MongoClient
    .connect(url)
    .then((client) =>
        functions.deleteDataByID(client , req , res ))
    .catch((err) => res.send({ api : err }))
}); 

router.post('/addUser/', async function (req, res, next) {
  MongoClient
    .connect(url)
    .then((client) =>
        functions.addUser(client , req , res ))
    .catch((err) => res.send({ api : err }))
}); 

module.exports = router;