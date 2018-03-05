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
    if(!empty($_POST['user']) && !empty($_POST['pass']) && !empty($_POST['email']) && !empty($_POST['team'])){
      $user = $_POST['user'];
      $pass = $_POST['pass'];
      $email = $_POST['email'];
      $team = $_POST['team'];
      include 'config.php';
      $query = mysqli_query($conn, "SELECT * FROM users WHERE username='".$user."'");
      $numrows = mysqli_num_rows($query);
      if($numrows == 0)
      {
        //Insert to Mysqli Query
        $sql = "INSERT INTO users(username, password, email, team) VALUES('$user','$pass','$email','$team')";
        $result = mysqli_query($conn, $sql);
        //Result Message
        if($result){
          header("Location: index.php");
        }
      }
      else
      {
        echo '
        <div class="container">
        <div class="panel panel-default">
        <div class="panel-body">
        <h2>That Username already exists! <br> Please try again.<h2>
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
