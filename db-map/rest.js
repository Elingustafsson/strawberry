var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {

  router.get("/strawberrydb", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var query = "SELECT * FROM ??";
    var table = ["questionanswers"];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      console.log(err);
      if (err) {
        res.json({
          "Error": true,
          "Message": "Error executing MySQL query"
        });
      } else {
        res.json({
          "Error": false,
          "Message": "Success",
          "strawberrydb": rows
        });
      }
    });
  });

  router.post("/strawberrydb/questionanswers", function(req, res) {
    var query = "INSERT INTO ??(??,??,??,??) VALUES (?,?,?,?)";
    var table = ["questionanswers", "answer1", "answer2", "answer3", "question", req.body.answer1, req.body.answer2, req.body.answer3, req.body.question];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      console.log(err);
      if (err) {
        res.json({
          "Error": true,
          "Message": "Error executing MySQL query"
        });
      } else {
        res.json({
          "Error": false,
          "Message": "Question Added !"
        });
      }
    });
  });

  // UPDATE Orders SET Quantity = Quantity + 1 WHERE ...
  router.get("/teamscore/:team",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
      var query = "UPDATE ?? SET ?? = ?? + 1 WHERE ?? = ?";
      var table = ["teamscore","score","score","team",req.params.team];
      query = mysql.format(query,table);
      connection.query(query,function(err,rows){
          if(err) {
              res.json({"Error" : true, "Message" : "Error executing MySQL query"});
          } else {
              res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
          }
      });
  });

  router.get("/strawberrydb/teamscore", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var query = "SELECT * FROM ??";
    var table = ["teamscore"];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      console.log(err);
      if (err) {
        res.json({
          "Error": true,
          "Message": "Error executing MySQL query"
        });
      } else {
        res.json({
          "Error": false,
          "Message": "Success",
          "teamscore": rows
        });
      }
    });
  });

  router.get("/strawberrydb/markers", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var query = "SELECT * FROM ??";
    var table = ["markers"];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      console.log(err);
      if (err) {
        res.json({
          "Error": true,
          "Message": "Error executing MySQL query"
        });
      } else {
        res.json({
          "Error": false,
          "Message": "Success",
          "Markers": rows
        });
      }
    });
  });

}
module.exports = REST_ROUTER;
