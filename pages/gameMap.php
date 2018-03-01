
<?php session_start();
include '../config.php';
$sess_user = $_SESSION["sess_user"];
$sql = "SELECT * FROM users WHERE username='$sess_user'";
$result = mysqli_query($conn, $sql);
if($row = mysqli_fetch_array($result)) {
    $id = $row["userID"];
    $password = $row["password"];
    $mail = $row["email"];
    $team = $row["team"];

}
?>

<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../style/gameMap.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <meta charset="utf-8" lang="en sv">
  <title>GameMap</title>
</head>

<body>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="profilePage.html">Strawberry game</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-out"></span> Help</a></li>
      <li><a href="profilePage.php"><span class="glyphicon glyphicon-log-in"></span> Quit game</a></li>
    </ul>
  </div>
  </nav>
  <div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Tutorial</h4>
          </div>
          <div class="modal-body">
            <ul>
              <li>How do I play?
                <p>-Take over as many zones as you can</p>
              </li>
              <li>How do i capture zones?
                <p>-Press the marker in the center of the zone that you want to take over</p>
              </li>
              <li>What happens when I press on a mark?
                <p>-A quiz starts</p>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="markerModal" role="dialog">

    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p id="question">This is a small modal.</p>
          <button id="btn1" class="btn-primary btn btn-sm butn">question</button>
          <button id="btn2" class="btn-primary btn btn-sm butn">question</button>
          <button id="btn3" class="btn-primary btn btn-sm butn">question</button>
          <button id="btn4" class="btn-primary btn btn-sm butn">question</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!--Create the div to hold the map.-->
  <div id="game-map"></div>
  <script>
    var simple = "<?php echo $team ?>";
    let params = (new URL(location)).searchParams;
    params.set("team", simple);
  </script>

  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAE5kp8oYu5PBbBxklN9QjSMLte2vpgfFg&libraries=geometry"></script>
  <script src="../javascript/gameMap.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


</body>

</html>
