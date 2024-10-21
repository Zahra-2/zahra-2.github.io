var c = document.getElementById("c");
var ctx = c.getContext("2d");

// جعل الكانفاس بحجم الشاشة بالكامل
c.height = window.innerHeight;
c.width = window.innerWidth;

// نصوص متغيرة لتمثل الأحرف
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&()&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size;
var drops = [];

// إعداد الإحداثيات الأولية لكل عمود
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// رسم الأحرف المتساقطة
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#f4427d";
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 35);

// معالجة إدخال المستخدم
const submitBtn = document.getElementById("submitBtn");
const decryptInput = document.getElementById("decryptInput");
const message = document.getElementById("message");

const modal = document.getElementById("successModal");
const closeModal = document.querySelector(".close");

submitBtn.addEventListener("click", () => {
    const inputValue = decryptInput.value.trim();
    if (inputValue === "keep going") {
        message.textContent = "";
        message.classList.add("success");
        message.classList.remove("error");
        modal.style.display = "block"; // إظهار المودال
    } else {
        message.textContent = "Incorrect, try again";
        message.classList.add("error");
        message.classList.remove("success");
    }
    message.classList.remove("hidden");
});

// إغلاق المودال عند النقر على زر الإغلاق
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// إغلاق المودال عند النقر خارج النافذة
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});