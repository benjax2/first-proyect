const cells = document.querySelectorAll("[data-cell-index]");
const turnIndicator = document.getElementById("turn-indicator");
const currentPlayerIcon = document.getElementById("current-player-icon");
const modalOverlay = document.getElementById("modal-overlay");
const quitButton = document.getElementById("quit-button");
const nextRoundButton = document.getElementById("next-round-button");

const xScoreEl = document.getElementById("x-score");
const oScoreEl = document.getElementById("o-score");
const tiesScoreEl = document.getElementById("ties-score");

const vsPlayerBtn = document.getElementById("vs-player-btn");
const vsCpuBtn = document.getElementById("vs-cpu-btn");
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const restartButton = document.getElementById("restart-button");
const opponentLabel = document.getElementById("opponent-label");

let board = Array(9).fill("");
let currentPlayer = "X";
let isGameActive = true;
let vsCPU = false;
let scores = { X: 0, O: 0, tie: 0 };

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function updateTurnUI() {
  currentPlayerIcon.textContent = currentPlayer;
  currentPlayerIcon.className = currentPlayer === "X" ? "text-[#30c4bf]" : "text-[#f2b336]";
}

function checkWinner() {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes("") ? null : "tie";
}

function endGame(winner) {
  isGameActive = false;

  const resultText = document.getElementById("result-text");
  const resultIcon = document.getElementById("result-icon");
  const resultSubtext = document.getElementById("result-subtext");

  if (winner === "tie") {
    scores.tie++;
    tiesScoreEl.textContent = scores.tie; // CORREGIDO aquí
    resultText.textContent = "ROUND TIED";
    resultIcon.textContent = "";
    resultSubtext.textContent = "";
  } else {
    scores[winner]++;
    // CORRECCIÓN: usar xScoreEl y oScoreEl en vez de variables no definidas
    if (winner === "X") xScoreEl.textContent = scores.X;
    else oScoreEl.textContent = scores.O;

    // Mostrar mensaje según modo y ganador
    const isPlayer = (winner === "X" && !vsCPU) || (winner === "X" && vsCPU);
    resultSubtext.textContent = isPlayer ? "YOU WON!" : "YOU LOST!";

    resultIcon.textContent = winner;
    resultIcon.className =
      "text-6xl font-bold " + (winner === "X" ? "text-[#30c4bf]" : "text-[#f2b336]");
    resultText.textContent = "TAKES THE ROUND";
  }

  // Mostrar modal: quitar clase 'hidden' y agregar 'flex' para centrar
  modalOverlay.classList.remove("hidden");
  modalOverlay.classList.add("flex");
}

function startGame() {
  board.fill("");
  isGameActive = true;
  currentPlayer = "X";
  updateTurnUI();
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.backgroundColor = "#1f3441";
    cell.style.color = "white";
  });
}

function cpuMove() {
  if (!isGameActive) return;
  const emptyIndices = board.map((v, i) => (v === "" ? i : null)).filter((v) => v !== null);
  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  const cell = cells[randomIndex];
  cell.click();
}

function handleClick(e) {
  const index = e.target.dataset.cellIndex;
  if (!isGameActive || board[index]) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.style.color = "#1f3441"; // Texto color azul oscuro fijo
  e.target.style.backgroundColor = currentPlayer === "X" ? "#30c4bf" : "#f2b336";

  const winner = checkWinner();
  if (winner) {
    endGame(winner);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnUI();

  if (vsCPU && currentPlayer === "O") {
    setTimeout(cpuMove, 400);
  }
}

// Eventos
cells.forEach((cell) => cell.addEventListener("click", handleClick));

vsPlayerBtn.addEventListener("click", () => {
  vsCPU = false;
  opponentLabel.textContent = "PLAYER";
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  startGame();
});

vsCpuBtn.addEventListener("click", () => {
  vsCPU = true;
  opponentLabel.textContent = "CPU";
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  startGame();
});

restartButton.addEventListener("click", () => {
  scores = { X: 0, O: 0, tie: 0 };
  xScoreEl.textContent = 0;
  oScoreEl.textContent = 0;
  tiesScoreEl.textContent = 0;
  startGame();
});

quitButton.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  modalOverlay.classList.remove("flex"); // ocultar modal también quitando flex
  gameContainer.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

nextRoundButton.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  modalOverlay.classList.remove("flex");
  startGame();
});
