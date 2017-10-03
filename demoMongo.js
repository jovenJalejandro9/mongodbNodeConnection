


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var date = new Date();
  var query = { address: "Calle Mirra",
  							day: date.getDate(),
  							month: date.getMonth()+1,
  							year: date.getFullYear(),
  							fullDate: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
  							time: date.getHours()+":"+date.getMinutes() };
  db.collection("customers").insert(query,function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});