document.getElementById("btn-login").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const userPass = document.getElementById("user-password");
  const password = userPass.value;

  if (email === "masum@gmail.com" && password === "masum") {
    window.location.href = "counter.html";
  } else {
    alert("halay hacker");
  }
});
