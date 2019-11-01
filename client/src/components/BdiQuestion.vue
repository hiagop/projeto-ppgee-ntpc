<template>
  <div class="fit column content-start q-col-gutter-md">
    <div class="col q-pa-lg">
      <h5>{{ `${question.id}. ${question.label}` }}</h5>
    </div>
    <div
      class="row"
      v-for="option in question.options"
      :key="`${question.id}.${option.id}`"
    >
      <div class="col-11 justify-start q-pl-md">
        <q-radio
          :val="option.id"
          :label="option.label"
          v-model="question.answer"
        />
      </div>
      <div
        class="col-1 justify-end q-pa-sm rounded-borders bg-blue-5 text-white text-center shadow-1"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BdiQuestion",
  props: {
    question: {
      id: Number,
      label: String,
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
