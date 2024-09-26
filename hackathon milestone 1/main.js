var refBtn = document.getElementById("btn");
var refPara = document.getElementById("references");
var refPara2 = document.getElementById("references2");
refBtn.addEventListener("click", function () {
    if (refPara.style.display === "none") {
        refPara.style.display = 'block';
        refPara2.style.display = 'block';
    }
    else {
        refPara.style.display = 'none';
        refPara2.style.display = 'none';
    }
});
