import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBnrFeZFz5YcvI7TqxT0O673ArNIEkgVOk",
    authDomain: "login-68811.firebaseapp.com",
    projectId: "login-68811",
    storageBucket: "login-68811.appspot.com",
    messagingSenderId: "510554953877",
    appId: "1:510554953877:web:7803e3e1fe8431ed07e39c"
})

export const auth = app.auth()
export default app
