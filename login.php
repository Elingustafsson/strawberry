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
        <h2>Invalid Username or Password!</h2>
        <a href="'.$link_address.'">Go back</a>';
      }
    }
    else
    {
      echo '
      <h2>Required all fields!<h2>
      <a href="'.$link_address.'">Go back</a>';
    }
  }
  ?>
