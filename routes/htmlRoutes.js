var db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        console.log('in home route')
        res.render("index");
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page

        if (req.user) {
            console.log("19");
            res.redirect("/members");
        }
        console.log("22");
        res.render("login");
        // res.render(path.join(__dirname, "../public/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
        res.render("members");
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};