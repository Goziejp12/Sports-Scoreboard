let homeCount = 0
let guestCount = 0
let homePt = document.getElementById("home-point")
let guestPt = document.getElementById("guest-point")

function btn1() {
    homeCount += 1
    homePt.textContent = homeCount
}

function btn2() {
    homeCount += 2
    homePt.textContent = homeCount
}

function btn3() {
    homeCount += 3
    homePt.textContent = homeCount
}

function guestBtn1() {
    guestCount += 1
    guestPt.textContent = guestCount
}

function guestBtn2() {
    guestCount += 2
    guestPt.textContent = guestCount
}

function guestBtn3() {
    guestCount += 3
    guestPt.textContent = guestCount
}