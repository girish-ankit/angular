<?php
$hostname = 'localhost';
$username = 'root';
$password = 'htp@123';
$db_name = 'angular_api';
$conn = mysql_connect($hostname, $username, $password);
if(!$conn){
    die('not able to connect to mysql serve');
}else{
    $dbSelect = mysql_select_db($db_name, $conn);
    if(!$dbSelect){
        echo 'Database '.$db_name.' has not selected';
    }else{
       // echo 'Database '.$db_name.' has been selected';
    }
   // echo 'connected to mysql server';
}
?>