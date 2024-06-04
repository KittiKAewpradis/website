<?php
session_start();

if (isset($_SESSION["name"])) {
    header("Location: links");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome Page</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>Lorem ipsum dolor sit amet fuga uga non iusto modi doloribus culpa, hic et voluptates explicabo laborum deserunt ipsa sit delectus veritatis?</p>
    <form action="login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <input type="submit" value="Login">
    </form>
</body>
</html>