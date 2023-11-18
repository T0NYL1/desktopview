
const player = document.getElementById('Player');

function playm(path) {
    player.src = path;
    player.loop = true;
    player.play();
}

function stopm() {
    player.pause();
    player.currentTime = 0;
    player.loop = false;
}

const pb = document.querySelectorAll('.pb');
const nb = document.querySelectorAll('.nb');
const rs = document.querySelectorAll('.steps');

let cs = 0;
function hs(i) {
    for (let j = 0; j < rs[i].children.length; j++) {
        if (j === cs) {
            rs[i].children[j].style.display = 'block';
        } else {
            rs[i].children[j].style.display = 'none';
        }
    }
}
function ns(i) {
    if (cs < rs[i].children.length - 1) {
        cs++;
        hs(i);
    }
}
function ps(i) {
    if (cs > 0) {
        cs--;
        hs(i);
    }
}
for (let i = 0; i < rs.length; i++) {
    nb[i].addEventListener('click', () => ns(i));
    pb[i].addEventListener('click', () => ps(i));
}
function showall() {
    for (let i = 0; i < rs.length; i++) {
        for (let j = 0; j < rs[i].children.length; j++) {
            rs[i].children[j].style.display = 'block';
        }
    }
}
window.addEventListener('resize', function () {
    if (window.innerWidth < 1000) {
        showall();
        hidebuttons();
    } else {
        for (let i = 0; i < rs.length; i++) {
            hs(i);
        }
        showbuttons();
    }
});
function hidebuttons() {
    for (let i = 0; i < pb.length; i++) {
        pb[i].style.display = 'none';
        nb[i].style.display = 'none';
    }
}
function showbuttons() {
    for (let i = 0; i < pb.length; i++) {
        pb[i].style.display = 'block';
        nb[i].style.display = 'block';
    }
}
if (window.innerWidth >= 1000) {
    for (let i = 0; i < rs.length; i++) {
        hs(i);
    }
} else {
    showall();
    hidebuttons();
}
