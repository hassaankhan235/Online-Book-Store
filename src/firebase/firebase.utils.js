import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDFtfP7Tzb8RM6pq6Z9rI6k6741ad6ZxMM",
    authDomain: "online-bookstore-4fbdc.firebaseapp.com",
    databaseURL: "https://online-bookstore-4fbdc.firebaseio.com",
    projectId: "online-bookstore-4fbdc",
    storageBucket: "online-bookstore-4fbdc.appspot.com",
    messagingSenderId: "235555219608",
    appId: "1:235555219608:web:b9f0499b22b145d67e88ed",
    measurementId: "G-JSZRQS45HR"
  };

export const createUserProfileDocument = async (displayName, email,uid) => {
  if(!displayName && !email && !uid) return;
  const userRef = firestore.doc(`user/${uid}`)
  const snapshot = await userRef.get()
  if(!snapshot.exists) {
    const createdAt = new Date();
    try{
      console.log("display name recieved here", displayName)
      await userRef.set({
        displayName,
        email,
        createdAt,
        // ...additionalData
      })
    } 
    catch(error){
      console.log('Error in creating')
    }
  }
  return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;