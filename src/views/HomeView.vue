<template>
  <div>Ну что, начнем?</div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data: () => ({ loader: true }),
  methods: {
    ...mapActions("projects", ["loadAllProjects"]),
    ...mapMutations(['setIsLoading'])
  },
  mounted() {
    this.setIsLoading(true);
    this.loadAllProjects();
    this.setIsLoading(false);
  },
};
</script>
