// Wrap every letter in a span
let mytitle = document.querySelector(".ml2");
mytitle.style.color = "#3BC739";

function changeColor() {
    let elem = document.getElementsByClassName("container_song");
    elem[0].style = "background-color: #3BC739";

}




var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 3000
    });