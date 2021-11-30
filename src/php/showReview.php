<?php
  require_once 'connect.php';
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
  header("Content-Type: application/json; charset=UTF-8");
  $connect = new mysqli($host, $db_user, $db_password, $db_name);
  if ($connect->connect_error) {
      die("Connection failed: " . $connect->connect_error);
  } 
  $select = mysqli_query($connect, "SELECT * FROM reviews");
  $rows = array();
  while($r = mysqli_fetch_assoc($select)) {
    $rows[] = $r;
  }
  print json_encode($rows); 
?>