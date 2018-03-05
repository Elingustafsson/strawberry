<!DOCTYPE html>
<html lang="en">

<head>
  <title>error page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="style/main.css">
</head>
<body>

  <?php
  $link_address = 'index.php';

  if(isset($_POST["submit"])){
    if(!empty($_POST['user']) && !empty($_POST['pass'])){
      $user = $_POST['user'];
      $pass = $_POST['pass'];
      //DB Connection
      include 'config.php';
      //Selecting database
      $query = mysqli_query($conn, "SELECT * FROM users WHERE username='".$user."' AND password='".$pass."'");
      $numrows = mysqli_num_rows($query);
      if($numrows !=0)
      {
        while($row = mysqli_fetch_assoc($query))
        {
          $dbusername=$row['username'];
          $dbpassword=$row['password'];
          $sess_team=$row['team'];
        }
        if($user == $dbusername && $pass == $dbpassword)
        {
          session_start();
          $_SESSION['sess_user']=$user;
          //Redirect Browser
          header("Location: pages/profilePage.php");
        }
      }
      else
      {
        echo '
        <div class="container">
        <div class="panel panel-default">
        <div class="panel-body">
        <h2>Invalid Username or Password!</h2>
        <a href="'.$link_address.'" class="btn btn-default" role="button">Go back</a>
        </div>
        </div>';
      }
    }
    else
    {
      echo '
      <div class="container">
      <div class="panel panel-default">
      <div class="panel-body">
      <h2>Required all fields!<h2>
      <a href="'.$link_address.'" class="btn btn-default" role="button">Go back</a>
      </div>
      </div>';
    }
  }
  ?>

</body>
</html>
