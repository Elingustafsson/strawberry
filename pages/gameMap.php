
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
  <title>Strawberry game</title>
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
      <a class="navbar-brand" href="profilePage.php">Strawberry game</a>
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
            <h4 class="modal-title"><strong>Tutorial</strong></h4>
          </div>
          <div class="modal-body">
            <ul>
              <li><strong>How do I play?</strong>
                <p>- You collect points by answering questions.</p>
              </li>
              <li><strong>How do I access the questions?</strong>
                <p>- Press the marker in the area within 50m.</p>
              </li>
              <li><strong>What happens when I press on a marker?</strong>
                <p>- A quiz starts.</p>
              </li>
              <li><strong>What is going and going, but never coming to the door?</strong>
                <p>- The clock.</p>
              </li>
              <li><strong>What happens if I answer a question incorrect?</strong>
                <p>- Nothing, we are nice and give you as many tries as you prefer.</p>
              </li>
              <li><strong>Can I join a team whenever I want?</strong>
                <p>- No you choose your team when you create your account.</p>
              </li>
              <li><strong>How to contact us:</strong>
                <p><span class="glyphicon glyphicon-envelope"></span> <a href="mailto:strawberry@game.com">strawberry@game.com</a></p>
                <p><span class="glyphicon glyphicon-earphone"></span> <a href="tel:+468-1337 0123">+468-1337 0123</a></p>
          </div>
          </li>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
          </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="markerModal" role="dialog">

    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="question" class="center-header modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <button id="btn1" class="btn11 btn-block btn-primary">Question</button>
          <button id="btn2" class="btn11 btn-block btn-primary">Question</button>
          <button id="btn3" class="btn11 btn-block btn-primary">Question</button>
          <button id="btn4" class="btn11 btn-block btn-primary">Question</button>
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
