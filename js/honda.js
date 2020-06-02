window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("myHeader");
    var gototop = document.getElementById("gototop");
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
}

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
        images[i].addEventListener("click", function() {
            showImage(this);
        });
}

function goToTop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop-=20;

        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 5);
}

function showImage(img) {
    var im = document.getElementById("imgModalid");
    im.src = img.src;

    $('#myImageModal').modal();
}