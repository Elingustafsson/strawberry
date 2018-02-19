<?php
if(isset($_POST["submit"])){
 if(!empty($_POST['user']) && !empty($_POST['pass'])){
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
 else
 {
 echo "Failure!";
 }
 }
 else
 {
 echo "That Username already exists! Please try again.";
 }
 }
 else
 {
 }
}
 ?>
