    // account creation
    $(".register-submit").on("click", function (e) {
        e.preventDefault();
        console.log("checking")
        var userName = $(".username").val().trim();
        var userPW = $(".password").val().trim();
        var userEmail = $(".email").val().trim();
        var newUser = {
            name: userName,
            password: userPW,
            email: userEmail

        };

        db.ref().push(newUser);


    });