
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import {getFirestore, setDoc , doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhf7vH7pXhF5iVBj7hjovISR4nTJcuoRQ",
    authDomain: "microjobs-f7f3b.firebaseapp.com",
    projectId: "microjobs-f7f3b",
    storageBucket: "microjobs-f7f3b.firebasestorage.app",
    messagingSenderId: "375097325018",
    appId: "1:375097325018:web:49ae68a0eb067b6b847ce3",
    measurementId: "G-G8V4HEEBJ2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function showMessage(message,divId){
    var messageDiv=document.getElementById(divId)
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
      messageDiv.style.opacity=0;

    },5000);
  }
 
  const signUp = documentgetElementById('field button-field');
  signUp.addEventListener('click'),(event)=> {
    event.preventDefault();
    const email=document.getElementById('remail').value;
    const password=documentgetElementById('rpassword').value;
    const name=documentgetElementById('rname').value;
    const auth=getAuth();
    const db=getFirestore();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      const userData={
        email: email,
        name: name,

      };
      showMessage('Account Created Successfully', 'signUpMessage');
      const docRef=doc(db, "users", user.uid);
      setDoc(docRef,userData)
      .then(()=>{
          window.location.href='home.html';
      })
      .catch((error)=>{
          console.error("error writing document", error);

      });
  })
  .catch((error)=>{
      const errorCode=error.code;
      if(errorCode=='auth/email-already-in-use'){
          showMessage('Email Address Already Exists !!!', 'signUpMessage');
      }
      else{
          showMessage('unable to create User', 'signUpMessage');
      }
    })
  }
  const signIn=document.getElementById('field button-field');
  signIn.addEventListener('click', (event)=>{
     event.preventDefault();
     const email=document.getElementById('email').value;
     const password=document.getElementById('password').value;
     const auth=getAuth();
 
     signInWithEmailAndPassword(auth, email,password)
     .then((userCredential)=>{
         showMessage('login is successful', 'signInMessage');
         const user=userCredential.user;
         localStorage.setItem('loggedInUserId', user.uid);
         window.location.href='home.html';
     })
     .catch((error)=>{
         const errorCode=error.code;
         if(errorCode==='auth/invalid-credential'){
             showMessage('Incorrect Email or Password', 'signInMessage');
         }
         else{
             showMessage('Account does not Exist', 'signInMessage');
         }
     })
  })