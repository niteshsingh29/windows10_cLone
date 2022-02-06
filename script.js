//let taskbar = document.getElementsByClassName('taskabr-icons-1')[0]
let startButton = document.getElementsByClassName('start-button')[0]
let inputButton = document.getElementsByClassName('taskabr-icons-2')[0]
let inputButtons = document.getElementsByClassName('input-button')[0]

function startmenu() {
    if (startButton.style.bottom == "43px") {
        startButton.style.bottom = "-655px"
        startButton.style.display = "none"

    }

    else {
        startButton.style.bottom = "43px"
        startButton.style.display = "block"

    }


}

function inputmenu() {
    if (inputButtons.style.bottom == "43px") {
        inputButtons.style.bottom = "-655px"
        inputButtons.style.display = "none"


    }

    else {
        inputButton.style.border = "black"
        inputButtons.style.bottom = "43px"
        inputButtons.style.left = "55px"
        inputButtons.style.display = "block"

    }
}

var Filebutton = document.getElementsByClassName('File-button')[0]
function fileMenu() {
    if (Filebutton.style.bottom == "90px") {
        Filebutton.style.bottom = "-655px"
        Filebutton.style.display = "none"


    }
    else {
        Filebutton.style.bottom = "90px"
        Filebutton.style.left = "15rem"
        Filebutton.style.display = "block"



    }
}

var viewMenu1 = document.getElementsByClassName('view-menu1')[0]
function viewMenu() {
    if (viewMenu1.style.opacity == "0") {
        viewMenu1.style.opacity = "1"
    }




}

//var sortMenu1 = document.getElementsByClassName('view-menu1')[0]
function sortMenu() {
    if (viewMenu1.style.opacity == "1") {
        viewMenu1.style.opacity = "0"
    }
}

var newMenu1 = document.getElementsByClassName('new-menu-img')[0]
function newMenu() {
    if (newMenu1.style.display == "none") {
        newMenu1.style.display = "block"

    }
}
function displayMenu() {
    newMenu1.style.display = "none"
}


// right click context-menu event 

const contextMenu = document.querySelector(".context");

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); //removing default click of browser

    let x = e.offsetX
    let y = e.offsetY
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = "visible";
})
