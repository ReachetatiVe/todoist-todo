<template>
  <div>Ну что, начнем?</div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({ loader: true }),
  methods: {
    ...mapActions("projects", ["loadAllProjects"]),
  },
  mounted() {
    this.loadAllProjects();
  },
};
</script>
