<?php
$error=''; //Variable to Store error message;
if(isset($_POST['submit'])){
 if(empty($_POST['user']) || empty($_POST['pass'])){
 $error = "Username or Password is Invalid";
 }
 else
 {
 //Define $user and $pass
 $user=$_POST['user'];
 $pass=$_POST['pass'];
 include 'config.php';
 //sql query to fetch information of registerd user and finds user match.
 $query = mysqli_query($conn, "SELECT * FROM login WHERE password='$pass' AND username='$user'");
 $rows = mysqli_num_rows($query);
 if($rows == 1){
 header("Location: pages/profilePage.html"); // Redirecting to other page
 }
 else
 {
 $error = "Username of Password is Invalid";
 }
 mysqli_close($conn); // Closing connection
 }
}
?>