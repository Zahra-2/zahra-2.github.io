 <!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome, Junior Attackers</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <canvas id="c"></canvas>
    
    <div class="overlay">
        <h1>Welcome, Junior Attackers!</h1>
        <p>Enter The Code Or Password</p>
        <input type="text" id="decryptInput" placeholder="Enter decrypt code" />
        <button id="submitBtn">Submit</button>
        <div id="message" class="hidden"></div>
    </div>
<div class="modal hidden" id="successModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>لقد أحسنتم عملاً ايها المخترقين !!!</p>
<p>الان يجب عليكم الانتقال للخطوه الثانية وهي ايجاد رقم الملف المناسب على الطاولة الأخرى 
 اسرعوا الوقت يمضي 
..........</p>
    </div>
</div>

    <script src="script.js"></script>
</body>
</html>
