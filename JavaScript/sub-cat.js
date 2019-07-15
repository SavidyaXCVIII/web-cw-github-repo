var divs = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5","Menu6"];
var visibleDivId = null;
function toggleVisibility(divId) {
    if(visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}


function bgBlack() {
    document.body.style.backgroundColor = "black";
}

function bgWhite() {
    document.body.style.backgroundColor = "white";
}
function bgBlue() {
    document.body.style.backgroundColor = "#22253c";
}
function txtBlack() {
    document.body.style.color = "black";

}
function txtWhite() {
    document.body.style.color = "white";
}
function txtBlue() {
    document.body.style.color = "#23a89b";
}

