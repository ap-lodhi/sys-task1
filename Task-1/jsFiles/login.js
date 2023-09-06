var userArray = JSON.parse(localStorage.getItem('userData')) || [];
var username  =document.getElementById('username').value

// arr.push(userArray)
// console.log(arr)
//  console.log(userArray[0].username);

console.log(userArray.username)

console.log(username)
console.log(password)
// console.log(userarray)
function validate(){
  
    var email  =document.getElementById('email').value
var password  =document.getElementById('password').value
// var arr = []
    // for(let i = 0; i < userArray.length; i++){
        if(userArray.email === email && userArray.password === password){
          alert("User lgoin successfully")
          window.location.href = "products.html";
          
        }else{
            alert("Invalid Credentials")
           email.value="";
           password.value="";
        }
    // }
        checkemail(email)
        checkpassword(password)
    
}

//  checkusername(username)

// function checkusername(username){
// if(username.length> 3){
//     document.getElementById('username').classList.add( 'success')
//     document.getElementById('username').classList.replace('error', 'success')
//     document.getElementById('username_error').innerText= ""

// }else{
//     document.getElementById('username').classList.add('error')
//     document.getElementById('username_error').innerText= "Username must be 4 latters long"
// }
// }

function checkemail(email){
    if(email ===userArray.emaiil){
        document.getElementById('email').classList.add( 'success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerText= ""
    }else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText= "Email did not match"
    }
    }

    
function checkpassword(password){
    if(password===userArray.password){
        document.getElementById('password').classList.add( 'success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerText= ""
    }else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText= "Inavid password"
    }
    }


   