var mysql = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

   router.get("/questions",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["questionanswers"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
          console.log(err);
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "questions" : rows});
            }
        });
    });

    router.post("/questions",function(req,res){
    var query = "INSERT INTO ??(??,??,??,??) VALUES (?,?,?,?)";
    var table = ["questionanswers","answer1","answer2","answer3","question",req.body.answer1,req.body.answer2,req.body.answer3,req.body.question];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
      console.log(err);
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Question Added !"});
        }
    });
});
}
module.exports = REST_ROUTER;
