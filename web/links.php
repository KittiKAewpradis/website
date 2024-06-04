<?php
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

session_start();
require "helper.php";
checklogin ();

require "connect.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello <?= $_SESSION["name"] ?>
    <a href="logout">logout</a>
    <br>
    <form action="link_action" method="post">
        <input type="text" placeholder="link" id="inp_link" name="inp_link"> 
        <input type="hidden" id="action" name="action" value="add">
        <button id="btn_add">add</button>
    </form>

<?php
$conn = sqlsrv_connect($serverName, $connectionInfo);
if ($conn) {
    // Define your query
    $sql = "SELECT * FROM links WHERE owner = '{$_SESSION["username"]}'";
    // Execute the query
    $stmt = sqlsrv_query($conn, $sql);
    if ($stmt === false) {
        echo "Error executing query: " . sqlsrv_errors()[0]['message'];
    } else {
        // Process the results (assuming you want to fetch all rows)
        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            echo "<br><br><br>aka.haadthip.com/".$row["code"]."<br>".$row["link"];
            echo "<form action='link_action' method='post'>";
            echo "<input type='hidden' name='code' value='" . $row["code"] . "'>";
            echo "<input type='hidden' name='action' value='delete'>";
            echo "<input type='submit' value='delete'>";
            echo "</form>";

        }
    }
    sqlsrv_free_stmt($stmt); // Free the statement resources
} else {
    echo "Connection could not be established.\n";
    die(print_r(sqlsrv_errors(), true));
}

sqlsrv_close($conn); // Close the connection
?>

</body>
</html>