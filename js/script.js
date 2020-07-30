const shareButton = document.querySelector(".sharing-button");
const sharePop = document.querySelector(".popover-container");

shareButton.addEventListener("mouseover", function () {
    sharePop.style.visibility = "visible";
    document.querySelector(".circle").style.backgroundColor = "hsl(214, 17%, 51%)";
    document.querySelector(".icon").style.color = "#ffffff";
});

sharePop.addEventListener("mouseover", function () {
    sharePop.style.visibility = "visible";
    document.querySelector(".circle").style.backgroundColor = "hsl(214, 17%, 51%)";
    document.querySelector(".icon").style.color = "#ffffff";
})

sharePop.addEventListener("mouseout", function () {
    sharePop.style.visibility = "hidden";
    document.querySelector(".circle").style.backgroundColor = "hsl(210, 46%, 95%)";
    document.querySelector(".icon").style.color = "hsl(214, 17%, 51%)";
});
