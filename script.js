// Fungsi untuk membuat pilihan bot secara acak
function getBotChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

  // Fungsi untuk menentukan pemenang dari permainan
function getWinner(playerChoice, botChoice) {
    if (playerChoice === botChoice) {
        return 'draw'
    } else if (
        (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')
    ) {
        return 'player'
    } else {
        return 'bot'
    }
}

  // Fungsi utama untuk memainkan game Batu Gunting Kertas
function playGame(choosen) {
        const playerChoice = choosen
        const botChoice = getBotChoice()
        localStorage.setItem('reload', 0)
        const vs = document.querySelector('.vs')
        vs.style.opacity = 0
        resetGame()

   // Fungsi untuk reset game
function resetGame() {
// ambil semua elemen batu gunting kertas, termasuk bot
        const bgc = document.querySelectorAll(
        '.rock, .paper, .scissors, .rockCOM, .paperCOM, .scissorsCOM');
// ambil parent nya
        const fix = Array.from(bgc).map(el => el.parentElement);

// hapus class selected
    bgc.forEach(el => el.classList.remove('selected'));

// hapus class fix
    fix.forEach(el => el.classList.remove('fix'));
}
        // Animation card
        const bgc = document.querySelector('.' + choosen)
        bgc.classList.add('selected')
        const fix = document.querySelector('.' + choosen).parentElement
        fix.classList.add('fix')
        const bot = document.querySelector('.' + botChoice + 'COM')
        bot.classList.add('selected')
        const botA = bot.parentElement
        botA.classList.add('fix')
        // End animation card

        const winner = getWinner(playerChoice, botChoice)
        if (winner === 'player') {
        const playerWin = document.querySelector('.ref')
        playerWin.innerHTML = `<h3 class="text-center text-white pt-2">PLAYER 1<br/>WIN</h3>`
        playerWin.style.width = '180%'
        playerWin.style.opacity = '1'
        playerWin.classList.add('bg-opacity-75')
        } else if (winner === 'bot') {
        const playerWin = document.querySelector('.ref')
        playerWin.innerHTML = `<h3 class="text-center text-white pt-1">COM<br/>WIN</h3>`
        playerWin.style.opacity = '1'
        playerWin.classList.add('bg-opacity-75')
        } else {
        const playerWin = document.querySelector('.ref')
        playerWin.style.opacity = '1'
        }
    }

localStorage.removeItem('reload')

function refreshAnim() {
    localStorage.removeItem('reload')
    const refresh = document.querySelector('.refresh')
    refresh.style.transform = 'rotate(-750deg)'
}
