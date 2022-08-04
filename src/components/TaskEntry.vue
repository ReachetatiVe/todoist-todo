<template>
  <v-list-item>
    <p>{{ task.content }}</p>
  </v-list-item>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    subsubtasks: [
      {
        title: "subSubTask1",
      },
      {
        title: "subSubTask2",
      },
    ],
  }),
};
</script>
