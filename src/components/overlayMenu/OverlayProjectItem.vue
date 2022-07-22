<template>
  <div class="d-flex project-item">
    <div class="project-item__color mr-2">
      {{ project.color }}
    </div>
    <div class="project-item__title">
      {{ project.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
