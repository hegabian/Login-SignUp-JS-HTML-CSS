
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var SignUpPassword = document.getElementById("SignUpPassword");
var signUpBtn = document.querySelector("#signUpBtn");
localStorage.setItem('user','[]')
var signUpArray = [];

signUpBtn.addEventListener("click", function(){
    var newUser = {
        name: signUpName.value,
        email: signUpEmail.value,
        pass: SignUpPassword.value,
    }  
     
    if(newUser.name == '' || newUser.email == '' || newUser.pass == ''){
        var x= document.getElementById("successMsg");
        x.innerText="Please fill all the data";
        x.classList.replace("d-none","d-block"); 
    }
    else{
        var signUpUsers = JSON.parse(localStorage.user);
        if (signUpUsers.length == 0){
            signUpArray.push(newUser);
            console.log (signUpArray); 
            localStorage.setItem('user',JSON.stringify(signUpArray));
            var x= document.getElementById("successMsg");
            x.innerText="Your Account is set successfuly..!";
            x.classList.replace("d-none","d-block");
        }
            for ( var i = 0 ; i<signUpUsers.length ; i++){
                
                if (!(newUser.name == signUpUsers[i].name || newUser.email == signUpUsers[i].email )){    
                    signUpArray.push(newUser);
                    console.log (signUpArray); 
                    localStorage.setItem('user',JSON.stringify(signUpArray));
                    var x= document.getElementById("successMsg");
                    x.innerText="Your Account is set successfuly..!";
                    x.classList.replace("d-none","d-block");
                    break;
                }
                else{
                    
                    var x= document.getElementById("successMsg");
                    x.innerText="You've already signed up, try to sign in ..!";
        
                    x.classList.replace("d-none","d-block");
                    break;
                    
                }
                
            } 
    }
// validation of repeatation
   
   
    
});





// inputs
