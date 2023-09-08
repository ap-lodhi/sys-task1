var userArray = JSON.parse(localStorage.getItem('userData')) || [];

// Check if userArray has a username
if (userArray.username) {
    var usernameElement = document.getElementById('username');
    usernameElement.textContent = userArray.username;
} else {
    // Handle the case where the username is not available
    console.log("Username not found in userArray.");
}
