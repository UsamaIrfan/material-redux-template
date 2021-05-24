import { SET_USER } from "../actionTypes"

import { firebase, auth } from '../../config/Firebase';
var googleprovider = new firebase.auth.GoogleAuthProvider();

export const googleLogin = (setOpen, setDisable) => {

    return (dispatch) => {
        setOpen(false)
        setDisable(true)
        firebase.auth().signInWithPopup(googleprovider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // console.log(user)
            dispatch({
                type: SET_USER,
                user: user,
            })
            setDisable(false)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            console.log(errorMessage)
            setDisable(false)
            // ...
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        const user = getState().Auth.user
        console.log("Sign out", user)
        if (user) {
            firebase.auth().signOut();
            dispatch({
                type: SET_USER,
                user: null,
            })
        }
    }
}


export const userSignUp = (userEmail, userPassword, userFirstName, userLastName, history, seterror) => {
    return (dispatch) => {
        // Register Logic
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
            .then((auth) => {
                // created new user and logged in
                console.log(auth)
                var user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: `${userFirstName} ${userLastName}`,
                    photoURL: 'https://statics.olx.com.pk/external/base/img/avatar_1.png',
                }).then(function () {
                    // Update successful.
                    dispatch({ type: SET_USER, user: user })
                    history.goBack()
                }).catch(function (error) {
                    // An error happened.
                    console.log(error)
                    seterror(error)
                });
                console.log(user)
            })
            .catch((err) => seterror(err.message))
    }
}

export const login = (Email, password, setOpen, setDisable) => {
    // login Logic
    setOpen(false)
    setDisable(true)
    return (dispatch) => {
        auth.signInWithEmailAndPassword(Email, password)
            .then((auth) => {
                // Logged in set forms display to none.
                console.log(auth)
                dispatch({
                    type: "SET_USER",
                    user: auth
                })
                setDisable(false)
            })
            .catch((err) => {
                setDisable(false)
                console.log(err.message)
            })
    }
}