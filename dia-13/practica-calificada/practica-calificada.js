let balance = 0;

const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amountInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const checkBalanceBtn = document.getElementById("checkBalanceBtn");
const messageDisplay = document.getElementById("message");

function updateBalanceDisplay() {
  balanceDisplay.textContent = balance.toFixed(2);
}

function showMessage(msg, isError = false) {
  messageDisplay.textContent = msg;
  messageDisplay.style.color = isError ? "#dc3545" : "#28a745";
}

depositBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid positive amount to deposit.", true);
    return;
  }

  balance += amount;
  updateBalanceDisplay();
  showMessage(`Deposit successful! You deposited $${amount.toFixed(2)}.`);
  amountInput.value = "";
});

withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid positive amount to withdraw.", true);
    return;
  }

  if (amount > balance) {
    showMessage("Insufficient balance. Cannot withdraw that amount.", true);
  } else {
    balance -= amount;
    updateBalanceDisplay();
    showMessage(`Withdrawal successful! You withdrew $${amount.toFixed(2)}.`);
    amountInput.value = "";
  }
});

checkBalanceBtn.addEventListener("click", () => {
  showMessage(`Current balance: $${balance.toFixed(2)}.`);
  amountInput.value = "";
});

updateBalanceDisplay();
showMessage("Welcome! Enter an amount and select an action.");
