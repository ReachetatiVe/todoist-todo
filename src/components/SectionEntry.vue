<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div class="text-h6">{{ section.name }}</div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. -->
      <Task />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import Task from "./TaskEntry.vue";

export default {
  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  data: () => ({}),

  components: {
    Task,
  },
};
</script>
