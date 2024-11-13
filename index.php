<?php

session_start();


include 'db.php';


$isLoggedIn = isset($_SESSION['user_id']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" crossorigin="anonymous">
    <title>Fitness Gear Hub</title>
</head>
<body>
   
<header>
    <div class="container">
        <nav class="header-right">
            <ul>
                <li><h1>FITNESS <span id="Gear">GEAR</span> HUB</h1></li>
                <li><a href="#menu" class="active">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#categories">CATEGORIES</a></li>
                <li><a href="#products">SHOP</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <?php if ($isLoggedIn): ?>
                    <li><button id="logoutButton" onclick="window.location.href='logout.php'">LogOut</button></li>
                <?php else: ?>
                    <li><button id="loginButton" onclick="window.location.href='login.php'">Login</button></li>
                    <li><button id="SignUpButton" onclick="window.location.href='signup.php'">SignUp</button></li>
                <?php endif; ?>
            </ul>
        </nav>
    </div>
</header>

<section id="menu" class="wide-section">
    <div class="container">
        <h1>There Is Always, A Next Level To Reach...</h1>
        <p>I Help You Get Double The EXP!</p>
        <?php if (!$isLoggedIn): ?>
            <button id="bcmMember" onclick="window.location.href='signup.php'">BECOME A MEMBER</button>
        <?php endif; ?>
    </div>
</section>

<section id="products">
    <div class="container3">
        <h2>Our Products</h2>
        <?php
        
        $query = "SELECT * FROM products";
        $result = mysqli_query($conn, $query);

        while ($product = mysqli_fetch_assoc($result)) {
            echo "<div class='product'>";
            echo "<img src='images/{$product['image']}' alt='{$product['name']}'>";
            echo "<h3>{$product['name']}</h3>";
            echo "<p>\${$product['price']}</p>";
            echo "<button onclick=\"addToCart({$product['id']})\">Add to Cart</button>";
            echo "</div>";
        }
        ?>
    </div>
</section>

<script src="script.js"></script>
</body>
</html>
