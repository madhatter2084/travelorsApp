// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios")



module.exports = function(app) {

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/Signup", function(req, res) {

    console.log("hitting this")
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.json({})
        // res.redirect(307, "/Selection");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/money", function(req,res){

    axios
    .get('http://api.currencylayer.com/live?access_key=d738433b43524d560f4079256a7d254e&format=1').then(response => {
      console.log(response.data)
      res.json(response.data)
    })

  })
  
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/LoginInfo", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // app.post("/api/LoginInfo", function(req, res) {
  //   console.log("hit route");
  //   console.log(req.body);
  //   res.json(req.body);
  //   // res.redirect("/Selection")
  // });

  

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/Selection", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  
  // Route for getting some data about our user to be used client side
  
};