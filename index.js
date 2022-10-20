let count = 0
let homePt = document.getElementById("home-point")
let guestPt = document.getElementById("guest-point")
function btn1() {
    count += 1
    homePt.textContent = count
    guestPt.textContent = 0
}

function btn2() {
    count += 2
    homePt.textContent = count
    guestPt.textContent = 0
}

function btn3() {
    count += 3
    homePt.textContent = count
    guestPt.textContent = 0
}

function guestBtn1() {
    count += 1
    guestPt.textContent = count
    homePt.textContent = 0
}

function guestBtn2() {
    count += 2
    guestPt.textContent = count
    homePt.textContent = 0
}

function guestBtn3() {
    count += 3
    guestPt.textContent = count
    homePt.textContent = 0
}

