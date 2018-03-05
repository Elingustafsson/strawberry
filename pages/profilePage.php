<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
<title>Profile page</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="../style/main.css">
</head>

<body>

<nav class="navbar-fixed-top navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
      <a class="navbar-brand" href="#prof">Strawberry game</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#leaderboard">Leaderboard</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="gameMap.php"><span class="glyphicon glyphicon-triangle-right"></span> Start game</a></li>
        <li><a href="../logout.php"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id="prof" class="container-profile">
  <h2>Welcome <?=$_SESSION['sess_user'];?>!</h2>
  <div class="user-profile">
    <div id=reactPic></div>
  </div>
</div>

<hr>

<div id="leaderboard" class="padding-top container">
<div class="ldbrd"><h2>Leaderboard</h2></div>
 <div class="ldbrdtext">
  <?php
  include '../config.php';

  // Print the table
  $sql = "SELECT * FROM teamscore ORDER BY score DESC";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
      echo"
      <table class='table'>
      <thead>
      <tr>
      <th>Team</th>
      <th>Score</th>
      </tr>
      </thead>";
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo "<tr>";
          echo "<td>" . $row['team'] . "</td>" . "<td>" . $row['score'] . "</td>";
          echo "</tr>";
      }
      echo "</table>";
  } else {
      echo "\n <br> No results in the table!";
  }
  ?>
 </div>
</div>
<hr>
<div id="news" class="padding-top container">
  <h2>Latest news</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
      <img src="../img/handberries.jpg" alt="Hands holding strawberries" style="width:100%;">
        <div class="carousel-caption">
        <h3>Legend of the Strawberries</h3>
          <p>Welcome to the Strawberry game, where you get strawberries by conquering areas.</p>
        </div>
      </div>

      <div class="item">
      <img src="../img/controller.jpg" alt="Gaming controller" style="width:100%;">
        <div class="carousel-caption">
        <h3>How to play</h3>
          <p>Conquer areas by answering questions.</p>
        </div>
      </div>

      <div class="item">
      <img src="../img/notebook.jpg" alt="Notebook" style="width:100%;">
        <div class="carousel-caption">
        <h3>Scheduled patches | 0.1 </h3>
          <p>This is a new update, now you can press on a marker and start your quiz. More information will be available soon.</p>
        </div>
      </div>

    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>
<hr>
<div id="faq" class="container">
  <div class="panel panel-default">
    <div class="panel-body">
    <h2>F.A.Qs</h2>
    <div class="faqtext">
      <ul>
        <li><strong>How do I play?</strong>
          <p>- Take over as many areas as you can.</p>
        </li>
        <li><strong>How do I capture an area?</strong>
          <p>- Press the marker in the area that you want to take over.</p>
        </li>
        <li><strong>What happens when I press on a marker?</strong>
          <p>- A quiz starts.</p>
        </li>
        <li><strong>What kind of currency do you get when you take over an area?</strong>
          <p>- You get a strawberry.</p>
        </li>
        <li><strong>What happens if I answer a question incorrect?</strong>
          <p>- You won't be able to answer that question again for a certain amount of time.</p>
        </li>
        <li><strong>Can I join a team whenever I want?</strong>
          <p>- No you choose your team when you create your account.</p>
        </li>
        <li><strong>How to contact us:</strong>
        <p><span class="glyphicon glyphicon-envelope"></span> <a href="mailto:strawberry@game.com">strawberry@game.com</a></p>
        <p><span class="glyphicon glyphicon-earphone"></span> <a href="tel:+468-1337 0123">+468-1337 0123</a></p>
       </div>
      </li>
      </ul>
    </div>
  </div>
</div>
<script src="https://unpkg.com/react@15.6.1/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.js"></script>
<script src="../javascript/reactComponent.js"></script>
<script src="../javascript/smoothscroll.js"></script>

</body>

</html>
