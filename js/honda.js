window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("myHeader");
    var gototop = document.getElementById("gototop");
    console.info(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        header.style.position = "fixed";
        header.style.left = 0;
        header.style.right = 0;
        header.style.backgroundColor = "rgb(255, 255, 255, 0.8)";
        header.style.zIndex = 9;

        gototop.style.display = "block";
    } else {
        header.style.position = "relative";
        header.style.backgroundColor = "rgb(255, 255, 255)";

        gototop.style.display = "none";
    }

    if (document.documentElement.scrollTop > 900) {
        this.incNumber();
        // this.incNumber(document.querySelectorAll(".stat span")[0], 9, 1000);
        // this.incNumber(document.querySelectorAll(".stat span")[1], 167, 50);
    }
}

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
        images[i].addEventListener("click", function() {
            showImage(this);
        });
}



function showImage(img) {
    var im = document.getElementById("imgModalid");
    im.src = img.src;

    $('#myImageModal').modal();
}

function incNumber(interval=200) {
    var timer = setInterval(function() {
        var objs = document.querySelectorAll(".stats span")
        for (var i = 0; i < objs.length; i++) {
            var max = parseInt(objs[i].getAttribute("rel"));
            var step = parseInt(objs[i].getAttribute("step"));
            var n = parseInt(objs[i].innerText);
            n += step;

            if (n > max) {
                n = max;
            }

            objs[i].innerText = n;
        }
    }, interval);
}

function common(sTop=0, duration=1000) {
    $("html, body").animate({
        scrollTop: sTop
    }, duration);
}

function goToTop() {
    common();
}

function go(obj) {
    event.preventDefault();
    var pos = document.querySelector(obj.getAttribute("href"));

    common(pos.offsetTop);
}