import firebase from "firebase";
import "firebase/firestore";

import { db } from "../../boot/firebase";

const firebaseAuth = firebase.auth();

firebaseAuth.languageCode = "pt";

const twitterUsersRef = db.collection("twitter");
const facebookUsersRef = db.collection("facebook");

const facebookPermissions = [
  "user_posts",
  "user_likes",
  "user_hometown",
  "user_location",
  "user_gender",
  "user_birthday"
];
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

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

      if (profile) {
        let userSnapshot = await facebookUsersRef.doc(profile.id).get();

        if (userSnapshot.exists) {
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

        facebookUsersRef
          .doc(profile.id)
          .set(newUser)
          .then(() => {
            return commit("setUser", newUser);
          })
          .catch(error => console.error(error));
      } else {
        return commit("setUser", null);
      }
    })
    .catch(error => console.error(error));
}

export function twitterSignIn({ commit }) {
  firebaseAuth
    .signInWithPopup(twitterAuthProvider)
    .then(async result => {
      const {
        additionalUserInfo: { profile, username, providerId },
        credential: { accessToken, secret },
        user: { displayName, email, phoneNumber }
      } = result;

      if (profile) {
        let userSnapshot = await twitterUsersRef.doc(profile.id_str).get();

        if (userSnapshot.exists) {
          return commit("setUser", userSnapshot.data());
        }

        const newUser = {
          profile,
          filledQuestionnaire: false,
          providerId,
          accessToken,
          secret,
          username,
          displayName,
          email,
          phoneNumber
        };

        console.log(newUser);

        twitterUsersRef
          .doc(profile.id_str)
          .set(newUser)
          .then(() => {
            return commit("setUser", newUser);
          })
          .catch(error => console.error(error));
      } else {
        return commit("setUser", null);
      }
    })
    .catch(error => console.error(error));
}

export function logout({ commit }) {
  firebaseAuth.signOut().then(() => commit("setUser", null));
}

export function submitAnswers({ commit }, payload) {
  const { questions, userId, providerId } = payload;

  const answers = questions.map(question => ({
    questionId: question.id,
    questionLabel: question.label,
    answer: question.options[question.answer]
  }));

  const usersRef =
    providerId === "twitter.com" ? twitterUsersRef : facebookUsersRef;

  usersRef
    .doc(String(userId))
    .update({ bdi: answers, filledQuestionnaire: true })
    .then(() => commit("saveQuestions", { answers }));
}
