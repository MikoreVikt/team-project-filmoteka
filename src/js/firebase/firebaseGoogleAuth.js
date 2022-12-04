import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDk5FHsj-aw6806AajR_3PAZufh6PlsazQ',
  authDomain: 'goit-6e88d.firebaseapp.com',
  projectId: 'goit-6e88d',
  storageBucket: 'goit-6e88d.appspot.com',
  messagingSenderId: '911281082679',
  appId: '1:911281082679:web:a7086c67b6a75c1f2f4ab2',
};

firebase.initializeApp(firebaseConfig);

const login = document
  .getElementById('signin')
  .addEventListener('click', signinUser);
const logout = document
  .getElementById('signout')
  .addEventListener('click', signoutUser);

const provider = new GoogleAuthProvider();

function signinUser() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function (data) {
      //console.log(data)
      document.getElementById('signin').classList.add('signOut');
      document.getElementById('signout').classList.add('signIn');
      document.getElementById('googleUser').style.display = 'block';
      renderGoogleUser(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function signoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      //console.log("Sign - out successful.");
      document.getElementById('signin').classList.remove('signOut');
      document.getElementById('signout').classList.remove('signIn');
      document.getElementById('googleUser').style.display = 'none';
    })
    .catch(error => {
      console.log(error);
    });
}

function renderGoogleUser(data) {
  document.getElementById('googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `;
}
