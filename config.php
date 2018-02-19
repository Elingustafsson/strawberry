<?php
$conn = new mysqli('localhost', 'root', '') or die (mysqli_error()); // DB Connection
 $db = mysqli_select_db($conn, 'questions') or die("DB Error"); // Select DB from database
 //Selecting Database
 ?>
