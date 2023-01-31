
let fields = []
let currentSymbole = 'cross'
let currentPlayer = 'cross'
let gameStatus = false


function symbolToArray(id) {
    if (!gameStatus) {
        if (!fields[id]) {
            fields[id] = currentSymbole
            if (currentSymbole == 'cross') {
                currentSymbole = 'circle'
            } else {
                currentSymbole = 'cross'
            }
            showSymbol(id)
            checkWinCondition()
            changePlayer()
        }
    }
}


function showSymbol() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle_${i}`).classList.remove('d-none')
        } else if (fields[i] == 'cross') {
            document.getElementById(`cross_${i}`).classList.remove('d-none')
        }
    }
}


function changePlayer() {
    let playerCross = document.getElementById('player-cross')
    let playerCircle = document.getElementById('player-circle')
    if (playerCircle.classList.contains('bg')) {
        playerCircle.classList.remove('bg')
        playerCross.classList.add('bg')
    } else {
        playerCross.classList.remove('bg')
        playerCircle.classList.add('bg')
    }
}


function checkWinCondition() {
    let winner

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('line_0').style.transform = 'scaleX(1)'
    } else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3]
        document.getElementById('line_1').style.transform = 'scaleX(1)'
    } else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6]
        document.getElementById('line_2').style.transform = 'scaleX(1)'
    } else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('line_3').style.transform = 'rotate(90deg) scaleX(1)'
    } else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line_4').style.transform = 'rotate(90deg) scaleX(1)'
    } else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line_5').style.transform = 'rotate(90deg) scaleX(1)'
    } else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line_7').style.transform = 'rotate(45deg) scaleX(1)'
    } else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line_6').style.transform = 'rotate(135deg) scaleX(1)'
    }
    showWinner(winner)
}


function showWinner(winner) {
    if (winner) {
        document.getElementById('new-game-btn').disabled = false
        gameStatus = true
        setTimeout(function () {
            document.getElementById('game-over-container').classList.remove('d-none')
            document.getElementById('new-game-btn').classList.remove('d-none')
        }, 1000);
    }
}


function newGame() {
    for (let i = 0; i < fields.length; i++) {
            document.getElementById(`circle_${i}`).classList.add('d-none')
            document.getElementById(`cross_${i}`).classList.add('d-none')
    }
    fields = []
    currentSymbole = 'cross'
    currentPlayer = 'cross'
    gameStatus = false
    document.getElementById('game-over-container').classList.add('d-none')
    document.getElementById('new-game-btn').classList.add('d-none')
    document.getElementById('line_0').style.transform = 'scaleX(0)'
    document.getElementById('line_1').style.transform = 'scaleX(0)'
    document.getElementById('line_2').style.transform = 'scaleX(0)'
    document.getElementById('line_3').style.transform = 'rotate(90deg) scaleX(0)'
    document.getElementById('line_4').style.transform = 'rotate(90deg) scaleX(0)'
    document.getElementById('line_5').style.transform = 'rotate(90deg) scaleX(0)'
    document.getElementById('line_7').style.transform = 'rotate(45deg) scaleX(0)'
    document.getElementById('line_6').style.transform = 'rotate(135deg) scaleX(0)'
}   
