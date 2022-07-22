<template>
  <div class="d-flex align-center project-item">
    <div
      class="project-item__color mr-2"
      :style="{ backgroundColor: getColorById(project.color).value }"
    ></div>
    <div class="project-item__title">
      {{ project.name }}
    </div>
  </div>
</template>
<script>
import colorMixin from "@/mixins/colors.js";
export default {
  mixins: [colorMixin],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.project-item {
  &__color {
    border: 1px solid black;
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }
}
</style>
