<?php

include 'config.php';


$sess_user = $_SESSION["sess_user"]; // store the user id into session

$sql = "SELECT * FROM login WHERE username='$sess_user'";
$result = mysqli_query($conn, $sql);

if($row = mysqli_fetch_array($result)) {
    $id = $row["id"];
    $username = $row["username"];
    $password = $row["password"];
    $mail = $row["email"];
    $team = $row["team"];


}




?>
