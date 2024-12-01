  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjvTMSTTSGqzwnb408TaWGuFA12W1fm-U",
    authDomain: "login-with-firebase-b88e1.firebaseapp.com",
    projectId: "login-with-firebase-b88e1",
    storageBucket: "login-with-firebase-b88e1.firebasestorage.app",
    messagingSenderId: "622296112375",
    appId: "1:622296112375:web:5469c45b61089508be87f2",
    measurementId: "G-0LFVD8Z60B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);