


function validate(){
    var username  =document.getElementById('username').value
    var mobileNo= document.getElementById('mobileNo').value
    var email  =document.getElementById('email').value
    var password  =document.getElementById('password').value
    var cpassword  =document.getElementById('cpassword').value
    
    checkUsername(username)
    checkMobileNo(mobileNo)
    checkEmail(email)
    checkPassword(password)
    checkpasswordsmatch(password ,cpassword)
    var usernameValid = checkUsername(username);
    var mobileNoValid = checkMobileNo(mobileNo);
    var emailValid = checkEmail(email);
    var passwordValid =  checkPassword(password)
  
  
    // console.log("usernameValid:", usernameValid);
    // console.log("mobileNoValid:", mobileNoValid);
    // console.log("emailValid:", emailValid);
    // console.log("passwordValid:", passwordValid);


    if (usernameValid && mobileNoValid && emailValid && passwordValid) {
        console.log("All validations passed");
        var userData = {
            username: username,
            mobileNo: mobileNo,
            email: email,
            password: password
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert("User Signup  successfully");
        window.location.href = "login.html";
    }

    
}

function checkUsername(username){
if(username.length> 3){
    document.getElementById('username').classList.add( 'success')
    document.getElementById('username').classList.replace('error', 'success')
    document.getElementById('username_error').innerText= ""
    return true;
}else{
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innerText= "Username must be 4 latters long"
    return false
}
}

function checkMobileNo(mobileNo){

    if(mobileNo.length> 9){
        document.getElementById('mobileNo').classList.add('success')
        document.getElementById('mobileNo').classList.replace('error','success')
        document.getElementById('mobileNo_error').innerText= ""
        return true
    }else{
        document.getElementById('mobileNo').classList.add('error')
        document.getElementById('mobileNo_error').innerText= "Mobile No. must be 10 digit long"
        return false
    }
}

function  checkEmail(email){
    if(email.length> 7  && email.includes('@gmail')){
        document.getElementById('email').classList.add( 'success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerText= ""
        return true
    }else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText= "Email must includes @gmail and lenth 8 latters long"
        return false
    }
    }

    
function checkPassword(password){
    if(password.length> 7 ){
        document.getElementById('password').classList.add( 'success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerText= ""
        return true
    }else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText= "Passwoed must 8 latters long and contain  "
        return false
    }
    }


    function checkpasswordsmatch(password , cpassword){
        if(password == cpassword  ){
            document.getElementById('cpassword').classList.add( 'success')
            document.getElementById('cpassword').classList.replace('error', 'success')
            document.getElementById('cpassword_error').innerText= ""
        }else{
            document.getElementById('cpassword').classList.add('error')
            document.getElementById('cpassword_error').innerText= "Password did not match "
        }
        }



  