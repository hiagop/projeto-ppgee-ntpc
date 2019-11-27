import firebase from "firebase";
import "firebase/firestore";

import { db } from "../../boot/firebase";

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export function facebookSignIn({ commit }) {
  firebase
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(result => {
      const {
        additionalUserInfo: { profile, isNewUser, providerId },
        credential: { accessToken, signInMethod },
        user: { displayName, email, emailVerified, phoneNumber }
      } = result;

      const newUser = {
        profile,
        isNewUser,
        providerId,
        accessToken,
        signInMethod,
        displayName,
        email,
        emailVerified,
        phoneNumber
      };

      if (isNewUser) {
        db.collection("users")
          .add(newUser)
          .then(userRef => {
            console.log("Saved new user to DB:", userRef);
            return commit("setUser", { id: userRef.id, ...newUser });
          })
          .catch(error => console.log(error));
      }
      return commit("setUser", newUser);
    })
    .catch(error => console.log(error));
}
