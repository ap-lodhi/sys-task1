var userArray = JSON.parse(localStorage.getItem('userData')) || [];
var username  =document.getElementById('username').value
var email  =document.getElementById('email').value
var password  =document.getElementById('password').value

//  console.log(userarray[0].username);

console.log(userArray)
// console.log(userarray)
function validate(){
  
    for(let i = 0; i < userArray.length; i++){
        if(userArray[i].email === email.value && userArray[i].password === password.value){
          alert("Please enter")
          
        }else{
            alert(" errorr")
        }
    }
    
    
   

   

}

 // checkusername(username)
    // checkemail(email)
    // checkpassword(password)

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

// function checkemail(email){
//     if(email.length> 7  && email.includes('@gmail')){
//         document.getElementById('email').classList.add( 'success')
//         document.getElementById('email').classList.replace('error', 'success')
//         document.getElementById('email_error').innerText= ""
//     }else{
//         document.getElementById('email').classList.add('error')
//         document.getElementById('email_error').innerText= "Email must includes @gmail and lenth 8 latters long"
//     }
//     }

    
// function checkpassword(password){
//     if(password.length> 7  && password.includes('.')){
//         document.getElementById('password').classList.add( 'success')
//         document.getElementById('password').classList.replace('error', 'success')
//         document.getElementById('password_error').innerText= ""
//     }else{
//         document.getElementById('password').classList.add('error')
//         document.getElementById('password_error').innerText= "Passwoed must 8 latters long and contain . "
//     }
//     }


   