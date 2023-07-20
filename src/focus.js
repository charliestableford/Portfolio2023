console.log('hi');

let playTitle = document.querySelector('.playTitle');
let workTitle = document.querySelector('.workTitle');
let aboutTitle = document.querySelector('.aboutTitle');
let workHighlight = document.querySelector('.workHighlight');
let playHighlight = document.querySelector('.playHighlight');
let aboutHighlight = document.querySelector('.aboutHighlight');

// playTitle.addEventListener('mouseover', hoverHightlight);

// function hoverHightlight(e) {
//   if (e.matches) {
//     //playHighlight.classList.remove('lowlight');
//     //playHighlight.classList.add('hightlight');
//     console.log('hi');
//   }
// }

workTitle.addEventListener("mouseover", mOver, false);
workTitle.addEventListener("mouseout", mOut, false);

function mOver() {
    //workHighlight.setAttribute("style", "background-color:blue;")
    workHighlight.classList.add('hightlight');
}

function mOut() {  
    workHighlight.classList.remove('hightlight');
}