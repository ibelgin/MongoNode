function getDataByID(err, db, req, res) {
    if (err) throw err;
    var dbo = db.db("mongonode");
    var query = { id: parseInt(req.params.id) };
    dbo
      .collection("datas")
      .find(query)
      .toArray(function (err, result) {
      if (err) throw res.send({ message: err });
        res.send({ api: result });
      });
}

function checkAPIActive(res) {
    res.send({
        message: "API is Active"
    });
}

exports.getDataByID = getDataByID;
exports.checkAPIActive = checkAPIActive;