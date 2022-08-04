<template>
  <v-list-item class="pr-0 m-0">
    <v-card
      outlined
      width="100%"
      class="pr-0"
      :class="{ 'mb-3': !task.parentId, 'mb-1': task.parentId }"
    >
      <v-card-title class="pb-0">
        <div
          class="d-flex align-center justify-space-between mb-2"
          style="width: 100%"
        >
          <div>
            {{ task.content }}
          </div>
          <!-- <v-checkbox
            hover
            :label="`${task.content}`"
            style="min-width: 90%"
          ></v-checkbox> -->
          <div class="controls">
            <v-hover v-slot="{ hover }">
              <v-btn
                rounded
                class="mr-2"
                :style="{ 'background-color': hover ? '#90CAF9' : '#f5f5f5' }"
              >
                <v-icon>mdi-pencil-outline</v-icon>
                Изменить
              </v-btn>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <v-btn
                rounded
                class="mr-2"
                :style="{ 'background-color': hover ? '#90CAF9' : '#f5f5f5' }"
              >
                <v-icon>mdi-close-octagon-outline</v-icon>
                Закрыть
              </v-btn>
            </v-hover>
            <!-- <v-btn rounded>
              <v-icon>mdi-close-octagon-outline</v-icon>
              Закрыть
            </v-btn> -->
            <!-- <v-btn icon small>
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon>mdi-close-octagon-outline</v-icon>
            </v-btn> -->
          </div>
        </div>
      </v-card-title>
      <v-card-text class="pb-0 pr-1">
        <v-divider></v-divider>
        <div class="task-description mb-2">{{ task.description }}</div>
        <div style="max-width: 50%">
          <v-combobox
            v-model="select"
            :items="items"
            label="labels"
            multiple
            chips
          ></v-combobox>
        </div>
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
  data: () => ({
    select: ["Vuetify", "Programming"],
    items: ["Programming", "Design", "Vue", "Vuetify"],
  }),
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
