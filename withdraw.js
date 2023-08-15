document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawFiled = document.getElementById("input-withdraw");
  const withdrawString = withdrawFiled.value;
  const withdrawAmount = parseFloat(withdrawString);

  const totalWithdrawElement = document.getElementById("total-withdraw");
  const previousTotalWithdrawString = totalWithdrawElement.innerText;
  const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

  const currentWithdrawAmount = previousTotalWithdraw + withdrawAmount;
  totalWithdrawElement.innerText = currentWithdrawAmount;

  const totalBalanceElement = document.getElementById("total-balance");
  const totalBalanceString = totalBalanceElement.innerText;
  const balaceTotal = parseFloat(totalBalanceString);

  const currentBalance = balaceTotal - withdrawAmount;
  totalBalanceElement.innerText = currentBalance;

  withdrawFiled.value = "";
});
