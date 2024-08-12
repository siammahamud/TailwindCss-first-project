const showPassword = document.getElementById("password-show");
const hidePassword = document.getElementById("password-hide");
const passInput = document.getElementById("sign-in-pass-input");
hidePassword.addEventListener("click",function() {
   hidePassword.classList.add("hidden");
   showPassword.classList.remove("hidden");
   passInput.type = "text";
});

showPassword.addEventListener("click",() =>{
   showPassword.classList.add("hidden");
   hidePassword.classList.remove("hidden");
   passInput.type = "password";

})
