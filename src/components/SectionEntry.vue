<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div class="text-h6">{{ section.name }}</div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <!--  -->
        <Task v-for="task in getTasks" :key="task.id" :task="task"/>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import { mapGetters } from "vuex";
import Task from "./TaskEntry.vue";

export default {
  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  data: () => ({}),

  computed: {
    ...mapGetters("tasks", { tasks: "getTasks" }),
    getTasks() {
      return this.tasks.filter((task) => {
        return (
          task.sectionId === this.section.id &&
          task.projectId === this.section.projectId &&
          !task.parentId
        );
      });
    },
  },
  methods: {},

  components: {
    Task,
  },
};
</script>
