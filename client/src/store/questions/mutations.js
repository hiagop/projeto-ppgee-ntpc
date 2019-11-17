export function answerQuestion(state, payload) {
  const { index, answer } = payload;
  state.questions[index].answer = answer;
}
