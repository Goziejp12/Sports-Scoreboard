let homeCount = 0
let guestCount = 0
let homePt = document.getElementById("home-point")
let guestPt = document.getElementById("guest-point")
let checkResult = document.getElementById("result")

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

function reset () {
    guestCount = 0
    homeCount = 0
    homePt.textContent = 0
    guestPt.textContent = 0
    checkResult.textContent = " "
}

function checkWinner() {
    if (homeCount > guestCount) {
        return checkResult.textContent = "Home Team winning"
    }

    else if (guestCount > homeCount) {
    return checkResult.textContent = "Guest Team winning"
    }

    else if (homeCount == guestCount) {
        return checkResult.textContent = "Match Draw"
    }

    else {
        return checkResult.textContent
    }
}