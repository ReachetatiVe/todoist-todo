<template>
  <v-list-item class="pr-0 m-0">
    <v-card
      outlined
      width="100%"
      class="pr-0"
      :class="{ 'mb-3': !task.parentId, 'mb-1': task.parentId }"
    >
      <v-card-title class="pb-0 pt-0">
        <div
          class="d-flex align-center justify-space-between"
          style="width: 100%"
        >
          <v-checkbox
            hover
            :label="`${task.content}`"
            style="min-width: 90%"
          ></v-checkbox>
          <div class="controls">
            <v-btn icon>
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-close-octagon-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="pb-0 pr-1">
        <div class="task-description">{{ task.description }}</div>
        <v-list class="pb-0">
          <v-list-item
            v-for="subtask in getSubtasks"
            :key="subtask.id"
            class="pr-0 m-0"
          >
            <TaskEntry :task="subtask" />
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-list-item>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TaskEntry",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    ...mapGetters("tasks", { tasks: "getTasks" }),
    getSubtasks() {
      return this.tasks.filter((task) => {
        return task.parentId === this.task.id;
      });
    },
  },
};
</script>
