<?php
$conn = new mysqli('crockett.highstone.biz', 'strawberry', 'strawberry123') or die (mysqli_error()); // DB Connection
 $db = mysqli_select_db($conn, 'strawberrydb') or die("DB Error"); // Select DB from database
 //Selecting Database
 ?>
