export function setUser(state, payload) {
  state.user = payload;
}

export function saveQuestions(state, payload) {
  state.user.bdi = payload.answers;
  state.user.filledQuestionnaire = true;
}
