import firebase from "firebase";
import "firebase/firestore";

import { db } from "../../boot/firebase";

const usersRef = db.collection("users");

const facebookPermissions = [
  "user_posts",
  "user_likes",
  "user_hometown",
  "user_location",
  "user_gender",
  "user_birthday"
];
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

facebookPermissions.map(permission =>
  facebookAuthProvider.addScope(permission)
);

export function facebookSignIn({ commit }) {
  firebase
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(async result => {
      const {
        additionalUserInfo: { profile, providerId },
        credential: { accessToken, signInMethod },
        user: { displayName, email, phoneNumber }
      } = result;

      // console.log(result);

      if (profile) {
        let userSnapshot = await usersRef.doc(profile.id).get();

        if (userSnapshot.exists) {
          console.log("User found!");
          return commit("setUser", userSnapshot.data());
        }

        const newUser = {
          profile,
          filledQuestionnaire: false,
          providerId,
          accessToken,
          signInMethod,
          displayName,
          email,
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
        return commit("setUser", null);
      }
    })
    .catch(error => console.log(error));
}

export function logout({ commit }) {
  firebase
    .auth()
    .signOut()
    .then(() => commit("setUser", null));
}
