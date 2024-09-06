const scrollers = document.querySelectorAll(".scroller");


addAnimation();

function addAnimation() {
    scrollers.forEach((scroller) => {
       scroller.setAttribute("data-animated", true); 

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from( scrollerInner.children);
        const duplicates = [];

        for (let i = 0; i < 2; i++) {
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                duplicates.push(duplicatedItem);
            });
        }

         // Append all duplicates to scrollerInner
        duplicates.forEach((duplicatedItem) => {
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}


// 
// function addAnimation() {
//     scrollers.forEach((scroller) => {
//         scroller.setAttribute("data-animated", true);

//         const scrollerInner = scroller.querySelector(".fifty-scroller-inner");
//         const scrollerContent = Array.from(scrollerInner.children);
//         const duplicates = [];

//         // Duplicate the scrollerContent two times
//         for (let i = 0; i < 3; i++) {
//             scrollerContent.forEach((item) => {
//                 const duplicatedItem = item.cloneNode(true);
//                 duplicatedItem.setAttribute("aria-hidden", true);
//                 duplicates.push(duplicatedItem);
//             });
//         }

//         // Append all duplicates to scrollerInner
//         duplicates.forEach((duplicatedItem) => {
//             scrollerInner.appendChild(duplicatedItem);
//         });
//     });
// }

// Json
// to page open amination
var taikoAnimationPC = bodymovin.loadAnimation({
    container: document.getElementById("sakura-pc"),
    path: "/assets/json/OP_pc.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });
  
  var taikoAnimationSP = bodymovin.loadAnimation({
    container: document.getElementById("sakura-sp"),
    path: "/assets/json/OP_smartphone.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice", // This ensures the SVG covers the container
    // }
  });

  var fiftyAnimation = bodymovin.loadAnimation({
    container: document.getElementById("fifty-animation"),
    path: "/assets/json/50th_5.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  });

  var travel = bodymovin.loadAnimation({
    container: document.getElementById("travel"),
    path: "/assets/json/travel.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  });

  var tree = bodymovin.loadAnimation({
    container: document.getElementById("tree"),
    path: "/assets/json/tree-animation.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  });

  var watch = bodymovin.loadAnimation({
    container: document.getElementById("watch"),
    path: "/assets/json/watch.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  });