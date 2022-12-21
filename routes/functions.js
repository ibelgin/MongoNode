const store = require('./store')

function checkAPIActive(res) {
  res.send({
      message: "API is Active"
  });
}

function getDataByID(client ,req, res) {
  var query = { id: parseInt(req.params.id) };

  client
    .db(store.dbname)
    .collection(store.dbcollection)
    .find(query)
    .toArray((err, result) => {
        if (err) throw res.send({ api : err });
        res.send({ api: result });
    });
}

function updateDataByID(client , req, res){
  const connect = client.db(store.dbname);
  const collection = connect .collection(store.dbcollection);
  
  collection
    .replaceOne({ id : parseInt(req.params.id) }, req.body)
    .then((ans) => {
      res.send({ api: ans });
    }).then((err) => {
      console.log(err);
  })    
}

function deleteDataByID(client , req, res){
  const connect = client.db(store.dbname);
  const collection = connect .collection(store.dbcollection);
  
  collection
    .replaceOne({ id : parseInt(req.params.id) }, req.body)
    .then((ans) => {
      res.send({ api: ans });
    }).then((err) => {
      console.log(err);
  })    
}

exports.checkAPIActive = checkAPIActive;
exports.getDataByID = getDataByID;
exports.updateDataByID = updateDataByID;
exports.deleteDataByID = deleteDataByID;