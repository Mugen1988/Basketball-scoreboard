let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

//FUNCTIONS FOR ADDING HOME POINTS
function add1home() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    updateLeadingTeam()
}
function add2home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    updateLeadingTeam()
}
function add3home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    updateLeadingTeam()
}

//FUNCTIONS FOR ADDING GUEST POINTS
function add1guest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    updateLeadingTeam()
}
function add2guest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    updateLeadingTeam()
}
function add3guest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    updateLeadingTeam()
}

//FUNCTION FOR HIGHLIGHT THE LEADER
function updateLeadingTeam() {
    const homeScore = parseInt(homeScoreEl.textContent);
    const guestScore = parseInt(guestScoreEl.textContent);
    
    if (homeScore > guestScore) {
        homeScoreEl.parentElement.classList.add("leading-team");
        guestScoreEl.parentElement.classList.remove("leading-team");
    } else if (guestScore > homeScore) {
        guestScoreEl.parentElement.classList.add("leading-team");
        homeScoreEl.parentElement.classList.remove("leading-team");
    } else {
        // Remove the leading team class if scores are tied
        homeScoreEl.parentElement.classList.remove("leading-team");
        guestScoreEl.parentElement.classList.remove("leading-team");
    }
}

//FUNCTION FOR RESET SCORE
function resetScore() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    updateLeadingTeam()
}



