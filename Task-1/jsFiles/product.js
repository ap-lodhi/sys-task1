var userArray = JSON.parse(localStorage.getItem('userData')) || [];


if (userArray.username) {
    var usernameElement = document.getElementById('username');
    usernameElement.textContent = userArray.username;
} else {
  
    console.log("Username not found in userArray.");
}
