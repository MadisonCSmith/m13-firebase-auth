// JavaScript authentication file
$(function() {

    // Initialize Firebase

      var config = {
        apiKey: "AIzaSyBxZX_duIgySZe2d9prkqBYsS03dlV_JrE",
        authDomain: "slick-8bd88.firebaseapp.com",
        databaseURL: "https://slick-8bd88.firebaseio.com",
        storageBucket: "slick-8bd88.appspot.com",
        messagingSenderId: "187887893385"
      };
      firebase.initializeApp(config);

    $("#signup-form").submit(function(event) { // do this- what does it do?
        event.preventDefault();
        signUp();
    })

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        


        // Get email, password, and display name
        var email = $('#email').val();
        var password = $("#password").val();
        var userName = $("#user_name").val();



        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
                user.updateProfile({
                    userName: userName   //!!
                }).then(function() {
                    window.location= 'index.html';
                });
            }).catch(function(error) {
                alert(error.message);
            });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
