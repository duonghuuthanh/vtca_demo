

function showShape(shapeId) {
    // Ẩn tất cả các hình
    var shapes = document.querySelectorAll(".shapes > div");
    for (var i = 0; i < shapes.length; i++)
        shapes[i].style.display = "none";

    // Hiển thị hình chỉ định
    var s = document.getElementById(shapeId);
    s.style.display = "block";
}

function themMau() {
    var color = document.getElementById("newColorId").value;
    var html = '<input type="button" style="background-color:' + color + '" onclick="toMau(this)" />';

    var divColor = document.getElementById("colorId");
    divColor.innerHTML += html;
}

function toMau(obj) {
    var c = obj.style.backgroundColor;

    var shapes = document.querySelectorAll(".shapes > div > svg > :first-child");
    for (var i = 0; i < shapes.length; i++)
        shapes[i].style.fill = c;
}