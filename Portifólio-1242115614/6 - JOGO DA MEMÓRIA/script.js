const grid = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn");
const parabensMsg = document.getElementById("parabens");

const numbers = ['1','2','3','4','5','6','7','8'];
let cards = [...numbers, ...numbers]; // Duplicdo para fazer pares
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCount = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  grid.innerHTML = '';
  cards = shuffle(cards);
  cards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.innerText = '';
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  });
  matchedCount = 0;
  parabensMsg.classList.add("hidden");
}

function flipCard(e) {
  if (lockBoard) return;

  const clicked = e.currentTarget;
  if (clicked.classList.contains("flipped")) return;

  clicked.classList.add("flipped");
  clicked.innerText = clicked.dataset.emoji;

  if (!firstCard) {
    firstCard = clicked;
    return;
  }

  secondCard = clicked;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    matchedCount += 2;
    resetSelection();

    if (matchedCount === cards.length) {
      parabensMsg.classList.remove("hidden");
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.innerText = '';
      secondCard.innerText = '';
      resetSelection();
    }, 1000);
  }
}

function resetSelection() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

resetBtn.addEventListener("click", createBoard);

// Inicializa o jogo ao carregar 
// anderson e bixa
createBoard();
