
import firebase from "firebase/app";
import "firebase/auth";

export const auth= firebase.initializeApp(



   {
        apiKey: "AIzaSyDyrgX81ZJBERqc_RUfzsTBWedR_dWzRlo",
        authDomain: "unichat-f4cbd.firebaseapp.com",
        projectId: "unichat-f4cbd",
        storageBucket: "unichat-f4cbd.appspot.com",
        messagingSenderId: "510717652703",
        appId: "1:510717652703:web:c7d6eee29ed2324480036a"
      }




).auth();
