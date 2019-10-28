<template>
  <div>
    <!-- 
      TODO: fix this
      [Vue warn]: Duplicate keys detected: '0'. This may cause an update error.
         found in
          <BdiQuestion> at src/components/BdiQuestion.vue
              <BdiQuestionnaire> at src/pages/BdiQuestionnaire.vue
                <QPageContainer>
                  <QLayout>
                    <VivaVida> at src/layouts/VivaVida.vue
                      <App> at src/App.vue
                        <Root> 
    -->
    <div v-for="option in question.options" :key="option.id">
      <q-radio
        :val="option.value"
        :label="option.label"
        v-model="question.answer"
      />
      <span>{{ option.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BdiQuestion",
  props: {
    question: {
      id: Number,
      options: [
        {
          id: Number,
          label: String,
          value: Number
        }
      ]
    }
  },
  data() {
    return {
      colorGrade: ["green", "yellow", "orange", "red"]
    };
  }
};
</script>

<style lang="scss" scoped></style>
