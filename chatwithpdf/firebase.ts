import {getApp, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDzo-xqNOH6GRCLZSzwcWtTtFp_D-1W-oQ",
    authDomain: "chat-with-pdf-36d2f.firebaseapp.com",
    projectId: "chat-with-pdf-36d2f",
    storageBucket: "chat-with-pdf-36d2f.appspot.com",
    messagingSenderId: "391894008636",
    appId: "1:391894008636:web:99d88f4c08c9e92bcbd439"
  };

const app = getApp.length === 0 ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(app)
const storage= getStorage(app)

export { db, storage};
  