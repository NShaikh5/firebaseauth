import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./firebasConfig";


const auth = getAuth(app);

let signUpUser = (obj) => {
  console.log(obj , '"obj"');

  // if (!obj.email) {
  //   return "Email is required";
  // }
  // if (!obj.password || obj.password.length < 6) {
  //   return "password is required & password must be greater then 6 characters ";
  // }
  // else {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then((userCredential) => {

      console.log(userCredential ,'userCredential');
      
      // Signed in 
      // const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('kdns' , error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });

  // }
}

let logInUser = (obj) => {
 return signInWithEmailAndPassword(auth, obj.email, obj.password)
   
}
let SignOutUser = () => {
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
export { signUpUser, logInUser, SignOutUser, checkAuthUser }