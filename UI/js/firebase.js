
const firebaseConfig = {
  apiKey: "AIzaSyBSpUS2PuOv_yklGHllWdmZK6d5diVFDZU",
  authDomain: "my-brand-app.firebaseapp.com",
  projectId: "my-brand-app",
  storageBucket: "my-brand-app.appspot.com",
  messagingSenderId: "228298023089",
  appId: "1:228298023089:web:04a0b0330b12c1a6a20290",
  measurementId: "G-LH34FK4L4G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const increment = firebase.firestore.FieldValue.increment(1);

// const logout = document.querySelector(".logout");

// logout.addEventListener("click", (e) => {
//   e.preventDefault();
//   auth.signOut().catch(console.log);
// });

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
