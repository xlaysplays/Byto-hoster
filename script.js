document.getElementById("login").addEventListener("click", function () {
  // Later: OAuth2 redirect
  alert("This will redirect to Discord login in the future.");
  
  // For now: Show bot creation form after login mock
  document.getElementById("login").classList.add("hidden");
  document.getElementById("bot-form").classList.remove("hidden");
});

document.getElementById("createForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("botName").value;
  const location = document.getElementById("location").value;

  alert(`Bot "${name}" will be created in ${location.toUpperCase()} with Node.js`);

  // Later: send data to backend
});
