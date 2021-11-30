<?php
  require_once 'connect.php';
  $connect = new mysqli($host, $db_user, $db_password, $db_name);
  if($connect->connect_errno != 0) {
    echo 'BŁĄD!';
  } else {
    $select = 'SELECT * FROM reviews';
    $response = $connect->query($select);
    $times = mysqli_num_rows($response);
  }
  $connect->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    if($times <= 0) echo 'Brak Recenzji!';
    else {
      for($i = 1; $i <= $times; $i++) {
        $row = mysqli_fetch_assoc($response);
        $id = $row['id'];
        $movie = $row['movie'];
        $username = $row['username'];
        $stars = $row['stars'];
        $review = $row['review'];
        echo $id." ".$movie." ".$username." ".$stars." ".$review.'</br>';
      }
    }
  ?>
</body>
</html>