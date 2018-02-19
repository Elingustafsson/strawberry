<!DOCTYPE html>
<html lang="en">

<head>
  <title>Index page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="style/main.css">
  <script src="javascript/smoothscroll.js"></script>
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
        <a class="navbar-brand" href="#">Strawberry game</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#news">News</a></li>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" data-toggle="modal" data-target="#createAccModal"><span class="glyphicon glyphicon-triangle-right"></span> Create account</a></li>
          <li><a href="#" data-toggle="modal" data-target="#loginModal"><span class="glyphicon glyphicon-log-out"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Modal login-->
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header acc-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
          <h1 align="center">Login</h1>
          <form action="login.php" method="post" style="text-align:center;">
          <input type="text" placeholder="Username" id="user" name="user"><br/><br/>
          <input type="password" placeholder="Password" id="pass" name="pass"><br/><br/>
          <input type="submit" value="Login" name="submit" class="acc-submit">
        </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal create acc-->
  <div class="modal fade" id="createAccModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header acc-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
        </div>
        <div class="modal-body">
          <div class="register-form">
           <form action="register.php" method="post">
            <label>Username:</label><input type="text" name="user"><br/><br/>
            <label>Password:</label><input type="password" name="pass"><br/><br/>
            <label>E-mail:</label><input type="text" name="email"><br/><br/>
            <label>Team:</label><select name="team">
            <option value="">Select...</option>
            <option value="Blue">Blue</option>
            <option value="Pink">Pink</option>
            <option value="Purple">Purple</option>
            <br/><br/>
            </select>
            <input type="submit" value="Register" name="submit" class="acc-submit"><br/><br/>
          </form>
        </div>
      </div>
     </div>
    </div>
  </div>

  <div id="news" class="padding-news container">
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
          <img src="http://www.vectorfantasy.com/wp-content/uploads/2015/04/violet-background-1-16.jpg" alt="Los Angeles" style="width:100%;">
          <div class="carousel-caption">
            <h3>Legends of the strawberries | 1.2 </h3>
            <p>This is a new update, now you can press on a mark and start your quizz. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="item">
          <img src="http://www.vectorfantasy.com/wp-content/uploads/2015/04/violet-background-1-16.jpg" alt="Chicago" style="width:100%;">
          <div class="carousel-caption">
            <h3>How to play strawberries | 1.0 </h3>
            <p>This is a new update, now you can press on a mark and start your quizz. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="item">
          <img src="http://www.vectorfantasy.com/wp-content/uploads/2015/04/violet-background-1-16.jpg" alt="New York" style="width:100%;">
          <div class="carousel-caption">
            <h3>How to play strawberries | 0.1 </h3>
            <p>This is a new update, now you can press on a mark and start your quizz. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
    <h2>F.A.Qs</h2>
    <div class="panel panel-default">
      <div class="panel-body">
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
          <li>How do I play?
            <p>-Take over as many zones as you can</p>
          </li>
          <li>How do i capture zones?
            <p>-Press the marker in the center of the zone that you want to take over</p>
          </li>
          <li>What happens when I press on a mark?
            <p>-A quiz starts</p>
          </li>
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
    </div>
</body>

</html>
