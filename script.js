let music = new Audio("music/music.mp3")
let turnAudio = new Audio("music/ting.mp3")
let gameover = new Audio("music/gameover.mp3")
let turn = "X"
let isgameover = false;



//Function to change turn
const changeTurn = () => {
    return turn == "X" ? "0" : "X"
}

//Function to check for win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 4, 5, 0],
        [3, 4, 5, 4, 15, 0],
        [6, 7, 8, 4, 25, 0],
        [0, 3, 6, -6, 15, 90],
        [1, 4, 7, 4, 15, 90],
        [2, 5, 8, 14, 15, 90],
        [0, 4, 8, 4, 15, 45],
        [2, 4, 6, 4, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won!";
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "22vw";
            music.play();
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Function to pause music
function pauseMusic(){
    console.log("pauseMusic called");
    music.pause();
}
//Add onclick listener torest button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxtext');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    pauseMusic();
})