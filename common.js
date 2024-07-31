const scrollers = document.querySelectorAll(".scroller");


addAnimation();

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)
    })
}