import firebase from "firebase";
import "firebase/firestore";

import { db } from "../../boot/firebase";

const usersRef = db.collection("users");

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export function facebookSignIn({ commit }) {
  firebase
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(async result => {
      const {
        additionalUserInfo: { profile, isNewUser, providerId },
        credential: { accessToken, signInMethod },
        user: { displayName, email, emailVerified, phoneNumber }
      } = result;

      if (profile) {
        let userSnapshot = await usersRef.doc(profile.id).get();

        if (userSnapshot.exists) {
          console.log("User found!");
          return commit("setUser", userSnapshot.data());
        }

        const newUser = {
          profile,
          isNewUser,
          filledQuestionnaire: false,
          providerId,
          accessToken,
          signInMethod,
          displayName,
          email,
          emailVerified,
          phoneNumber
        };

        usersRef
          .doc(profile.id)
          .set(newUser)
          .then(() => {
            console.log("Saved new user to DB.");
            return commit("setUser", newUser);
          })
          .catch(error => console.log(error));
      } else {
        // commit("setError", "login-error");
        return;
      }
    })
    .catch(error => console.log(error));
}
