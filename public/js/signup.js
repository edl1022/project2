$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var nameInput = $("input#name-input");
    var signInput = $("input#sign-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var password2Input = $("input#password2-input");


    // When the signup button is clicked, we validate the email and password are not blank. and the passwords match
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            name: nameInput.val(),
            sign: signInput.val(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            password2: password2Input.val().trim()
        };

        if (!userData.name || !userData.birthday || !userData.email || !userData.password || !userData.password2) {
            alert("Please fill empty fields");
            return;
        }
        if (userData.password != userData.password2) {
            alert("Passwords do not match")
            return;
        }

        if (userData.password.length < 6) {
            alert("Passwords must be 6 or more characters")
            return;
        }

        // If we have an email and password, the passwords match, and are more than 6 chars, run the signUpUser function
        signUpUser(userData.name, userData.sign, userData.email, userData.password);
        nameInput.val("");
        signInput.val("");
        emailInput.val("");
        passwordInput.val("");
        password2Input.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(name, birthday, email, password) {
        $.post("/api/signup", {
                name: name,
                sign: sign,
                email: email,
                password: password
            })
            .then(function(data) {
                window.location.replace("../views/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});