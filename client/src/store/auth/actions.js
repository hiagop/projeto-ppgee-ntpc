import firebase from "firebase";

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export function facebookSignIn({ commit }) {
  console.log("testando login");
  firebase
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(user => {
      const newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        credentials: user.credentials
      };
      commit("setUser", newUser);
    })
    .catch(error => {
      console.log(error);
    });
}
