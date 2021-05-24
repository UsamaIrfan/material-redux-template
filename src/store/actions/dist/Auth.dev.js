"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.userSignUp = exports.signOut = exports.googleLogin = void 0;

var _actionTypes = require("../actionTypes");

var _Firebase = require("../../config/Firebase");

var googleprovider = new _Firebase.firebase.auth.GoogleAuthProvider();

var googleLogin = function googleLogin(setOpen, setDisable) {
  return function (dispatch) {
    setOpen(false);
    setDisable(true);

    _Firebase.firebase.auth().signInWithPopup(googleprovider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user; // console.log(user)

      dispatch({
        type: _actionTypes.SET_USER,
        user: user
      });
      setDisable(false); // ...
    })["catch"](function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;

      console.log(errorMessage);
      setDisable(false); // ...
    });
  };
};

exports.googleLogin = googleLogin;

var signOut = function signOut() {
  return function (dispatch, getState) {
    var user = getState().Auth.user;
    console.log("Sign out", user);

    if (user) {
      _Firebase.firebase.auth().signOut();

      dispatch({
        type: _actionTypes.SET_USER,
        user: null
      });
    }
  };
};

exports.signOut = signOut;

var userSignUp = function userSignUp(userEmail, userPassword, userFirstName, userLastName, history, seterror) {
  return function (dispatch) {
    // Register Logic
    _Firebase.auth.createUserWithEmailAndPassword(userEmail, userPassword).then(function (auth) {
      // created new user and logged in
      console.log(auth);

      var user = _Firebase.firebase.auth().currentUser;

      user.updateProfile({
        displayName: "".concat(userFirstName, " ").concat(userLastName),
        photoURL: 'https://statics.olx.com.pk/external/base/img/avatar_1.png'
      }).then(function () {
        // Update successful.
        dispatch({
          type: _actionTypes.SET_USER,
          user: user
        });
        history.goBack();
      })["catch"](function (error) {
        // An error happened.
        console.log(error);
        seterror(error);
      });
      console.log(user);
    })["catch"](function (err) {
      return seterror(err.message);
    });
  };
};

exports.userSignUp = userSignUp;

var login = function login(Email, password, setOpen, setDisable) {
  // login Logic
  setOpen(false);
  setDisable(true);
  return function (dispatch) {
    _Firebase.auth.signInWithEmailAndPassword(Email, password).then(function (auth) {
      // Logged in set forms display to none.
      console.log(auth);
      dispatch({
        type: "SET_USER",
        user: auth
      });
      setDisable(false);
    })["catch"](function (err) {
      setDisable(false);
      console.log(err.message);
    });
  };
};

exports.login = login;