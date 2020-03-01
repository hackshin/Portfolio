<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $firstname = $_REQUEST['first'];
    $lastnam = $_REQUEST['last'];
    $email = $_REQUEST['email'];
    $comment = $_REQUEST['comments'];
 
    if(empty($firstname))
    {
         header("Location: index.html?value=failed"); 
        
    }
    else if( empty($lastnam))
    {
         header("Location: index.html?value=failed"); 
        
    }
    else if(empty($email))
    {
         header("Location: index.html?value=failed"); 
        
    }
    else if(empty($comment))
    {
        header("Location: index.html?value=failed");
        
    }
    else{

$sql = "INSERT INTO folio1 values ('','$firstname', '$lastnam','$email','$comment')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";



     header("Location: index.html?value=success");
} else {
    header("Location: index.html?value=failed");
    
}

    }
}



$conn->close();


?>