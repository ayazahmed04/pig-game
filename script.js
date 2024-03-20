"use strict"

// Selecting Element
let player0El = document.querySelector(".player--0")
let player1El = document.querySelector(".player--1")
let score0El = document.querySelector("#score--0")
let score1El = document.querySelector("#score--1")
let current0El = document.querySelector("#current--0")
let current1El = document.querySelector("#current--1")
let diceEl = document.querySelector(".dice")
let newBtn = document.querySelector(".btn--new")
let btnRoll = document.querySelector(".btn--roll")
let btnHold = document.querySelector(".btn--hold")

// Starting Game
score0El.textContent = 0
score1El.textContent = 0
current0El.textContent = 0
current1El.textContent = 0
diceEl.classList.add("hidden")

let currentScore = 0
let activeplayer = 0
let scores = [0, 0]
let playing = true

// Add roll dice functionality
btnRoll.addEventListener("click", () => {
  if (playing) {
    // generating a random dice number
    let dice = Math.trunc(Math.random() * 6) + 1

    diceEl.src = `dice-${dice}.png`
    diceEl.classList.remove("hidden")

    // if dice is not equal to one
    if (dice !== 1) {
      // console.log("Dice is not equal to one ")
      currentScore += dice
      document.getElementById(`current--${activeplayer}`).textContent = currentScore
    } else {
      // switch player
      document.getElementById(`current--${activeplayer}`).textContent = 0
      currentScore = 0
      activeplayer = activeplayer === 0 ? 1 : 0
      player0El.classList.toggle("player--active")
      player1El.classList.toggle("player--active")
    }
  }
})

// Hold score function

btnHold.addEventListener("click", () => {
  if (playing) {
    // add current score the the active player score
    scores[activeplayer] += currentScore
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer]

    // check if the score of active player is greater than 100 in our checking case we make 15
    if (scores[activeplayer] >= 15) {
      playing = false
      diceEl.classList.add("hidden")

      document.querySelector(`.player--${activeplayer}`).classList.add("player--winner")
      document.querySelector(`.player--${activeplayer}`).classList.remove("player--active")
    } else {
      // switch player
      document.getElementById(`current--${activeplayer}`).textContent = 0
      currentScore = 0
      activeplayer = activeplayer === 0 ? 1 : 0
      player0El.classList.toggle("player--active")
      player1El.classList.toggle("player--active")
    }
  }
})
