var signInEmail = document.getElementById("signInEmail");
var SignInPassword = document.getElementById("SignInPassword");
var signInBtn = document.querySelector("#signInBtn");

//Sign in
signInBtn.addEventListener("click", function(){
    var loggedInUser = {
        email: signInEmail.value,
        password: SignInPassword.value,
    }
    var arrayOfUsers = JSON.parse(localStorage.user);

    for (var i = 0; i<arrayOfUsers.length ; i++){
        console.log(loggedInUser.email,arrayOfUsers[i].email,loggedInUser.password,arrayOfUsers[i].pass);
        if (loggedInUser.email == arrayOfUsers[i].email && loggedInUser.password == arrayOfUsers[i].pass ){
            location.replace("profile.html");
        }

        else{
            var x= document.getElementById("warningMsg");
            x.innerText="Wrong entry";
            x.classList.replace("d-none","d-block"); 
        }
    }
})