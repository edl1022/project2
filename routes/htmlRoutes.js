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

    // Load example page and pass in an example by id
    // app.get("/example/:id", function(req, res) {
    //     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //         res.render("example", {
    //             example: dbExample
    //         });
    //     });
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};



// module.exports = function(app) {

//     // Load index page
//     app.get("/", function(req, res) {
//         if (req.user) {
//             res.redirect("/members");
//         }
//         db.Example.findAll({}).then(function(dbExamples) {
//             res.render("index", {
//                 msg: "Welcome!",
//                 examples: dbExamples
//             });
//         });
//     });

//     app.get("/login", function(req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//             res.redirect("/members");
//         }
//         res.render(path.join(__dirname, "../views/login.handlebars"));
//     });

//     // Here we've add our isAuthenticated middleware to this route.
//     // If a user who is not logged in tries to access this route they will be redirected to the signup page
//     app.get("/members", isAuthenticated, function(req, res) {
//         res.sendFile(path.join(__dirname, "../views/members.handlebars"));
//     });

// };