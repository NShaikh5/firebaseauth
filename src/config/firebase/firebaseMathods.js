import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app  from "./firebasConfig";
 

const auth = getAuth(app);

let signUpUser = (obj) => {

    if(!obj.email){
 return "Email is required";
    }
    if(!obj.password || obj.password.length < 6){
        return "password is required & password must be greater then 6 characters ";
    }
    else{

    }
   return createUserWithEmailAndPassword(auth, obj.email, obj.password)
}

let logInUser =() => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
let SignOutUser = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}
let checkAuthUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {    
          // User is signed out
          // ...
        }
      });
    } 
      export {signUpUser , logInUser, SignOutUser, checkAuthUser}