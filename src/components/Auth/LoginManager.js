import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


//** FireBase Config File  */
export const initializeAuthFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


//** Google Sing In Handler */
export const googleSingInHandler = () => {
    //** Firebase provider For Google */
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, photoURL, email } = res.user
            const singInUser = {
                isSignedIN: true,
                name: displayName,
                email: email,
                photo: photoURL,
                successful: true
            }
            return singInUser
        })
        .catch(error => {
            console.log(error)
            console.log(error.message)
        })
}

//** Google Sing Out Handler */
export const googleSingOutHandler = () => {
    return firebase.auth().signOut()
        .then(res => {
            const singOutUser = {
                isSignedIN: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                successful: false
            }
            return singOutUser
        })
        .catch(error => {
            console.log(error)
            console.log(error.message)
        })
}


//** Facebook Sing In Handler */
export const facebookSignInHandler = () => {
    //** Firebase provider For Facebook */
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        user.successful = true
        return user
    }).catch(error => {
        console.log(error)
        console.log(error.message)
    })
}


//** Registration Form Submit Handler (Create New) */
export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newSetUser = res.user
            newSetUser.error = ''
            newSetUser.successful = true
            updateUserInfo(name)
            return newSetUser
        })
        .catch(error => {
            const newSetUser = {}
            newSetUser.error = error.message;
            newSetUser.successful = false
            return newSetUser
        });
}


//** Registration Form Submit Handler (Sign IN) */
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newSetUser = res.user
            newSetUser.error = ''
            newSetUser.successful = true
            return newSetUser
            // setUser(newSetUser)
            // setLoggedInUser(newSetUser)
            // history.replace(from)
            // console.log('sign in user info', res.user);
        })
        .catch(error => {
            const newSetUser = {}
            newSetUser.error = error.message;
            newSetUser.successful = false
            return newSetUser
            // setUser(newSetUser)
        });
}


//** Update User Name */
const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
        // photoURL: "https://i.ibb.co/L95jRcB/profile-1.png"
    })
        .then(res => {
            console.log('User Info Update Successfully');
        })
        .catch(error => {
            console.log(error)
            console.log(error.message)
        })
}