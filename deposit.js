document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("input-deposit");
  const depositAmountString = depositField.value;
  const depositAmount = parseFloat(depositAmountString);

  const depositElement = document.getElementById("deposit-hub");
  const totalDepositString = depositElement.innerText;
  const totalDeposit = parseFloat(totalDepositString);

  const currentAmount = totalDeposit + depositAmount;
  depositElement.innerText = currentAmount;

  const balanceTotalElement = document.getElementById("total-balance");
  const balanceTotalString = balanceTotalElement.innerText;
  const balaceTotal = parseFloat(balanceTotalString);

  const currentBalance = balaceTotal + depositAmount;
  balanceTotalElement.innerText = currentBalance;

  depositField.value = "";
});
