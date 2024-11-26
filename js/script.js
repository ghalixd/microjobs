let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
/* circle loader */
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        preloader.style.display = "none"; // Ensure it is removed after fade-out
    }, 500); // Match the fade-out duration
});

/* circle loader*/  

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    signupLink = document.querySelector(".sginup-link"),  // Lien Sign up
    loginLink = document.querySelector(".login-link");    // Lien Login

// Gérer la visibilité des mots de passe
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

// Gérer l'affichage du formulaire de connexion et d'inscription
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.add("show-signup");
    console.log("Signup form displayed");
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.remove("show-signup");
    console.log("Login form displayed");
});


