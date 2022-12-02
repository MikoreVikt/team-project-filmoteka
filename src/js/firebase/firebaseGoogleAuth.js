import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6rE-24xlXSrIiMHCRiHlmICrm1cFqlzo",
  authDomain: "goit-d82f1.firebaseapp.com",
  projectId: "goit-d82f1",
  storageBucket: "goit-d82f1.appspot.com",
  messagingSenderId: "609111571768",
  appId: "1:609111571768:web:493b2dbb3ec13af52d95cd",
  measurementId: "G-N87QQMEEE7"
};

firebase.initializeApp(firebaseConfig);

const login = document.getElementById('signin').addEventListener('click', signinUser);
const logout = document.getElementById('signout').addEventListener('click', signoutUser)

const provider = new GoogleAuthProvider();


function signinUser() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function (data){
          //console.log(data)
          document.getElementById('signin').classList.add('signOut');
          document.getElementById('signout').classList.add('signIn');
          document.getElementById('googleUser').style.display = "block";
            renderGoogleUser(data);
        })
        .catch(function(error){
            console.log(error)
        })
    }

function signoutUser(){
    firebase.auth().signOut().then(() => {
        //console.log("Sign - out successful.");
        document.getElementById('signin').classList.remove('signOut');
      document.getElementById('signout').classList.remove('signIn');
      document.getElementById('googleUser').style.display = "none";
    }).catch(error => {
          console.log(error)
        })
      }


      function renderGoogleUser(data){
          document.getElementById('googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `
}
