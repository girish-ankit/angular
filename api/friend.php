<?php
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

include_once 'setting.php';

//echo '<pre>'; print_r($_SERVER); echo '</pre>'; die();

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestURI = $_SERVER['REQUEST_URI'];
//echo $requestMethod;

shell_exec('echo Request Method: \"'.$requestMethod.'\" Request URI: \"'.$requestURI.'\" > output.txt');

$dbQuery = mysql_query("SELECT * FROM friends ORDER BY fid ASC");
$studentDataArr = array();
$i=0;

while($res = mysql_fetch_object($dbQuery)){
    $studentDataArr[$i] = array('id'=> $res->fid, 'firstName'=>$res->first_name, 'lastName'=> $res->last_name, 'created'=> $res->created, 'updated'=>$res->updated);
    $i++;
    
}

$output = json_encode($studentDataArr);
print $output;

?>