<?php
  require_once 'connect.php';
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
  header("Content-Type: application/json; charset=UTF-8");
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);
  $connect = mysqli_connect($host, $db_user, $db_password, $db_name);
  $username = $_POST['username'];
  $stars = $_POST['stars'];
  $review = $_POST['review'];
  $movie = $_POST['movie'];
  if($movie != "" || $username != "") $query = "INSERT INTO reviews VALUES (NULL, '$movie', '$username', '$stars', '$review')";

  $result = @mysqli_query($connect, $query);
  if ($result) {
      echo json_encode(["sent" => 1, ]);
  } else {
      echo json_encode(["sent" => 0, ]);
  }
?>
