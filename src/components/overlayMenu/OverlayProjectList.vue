<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3>Projects</h3>
        <div>
          <v-btn
            elevation="2"
            icon
            x-small
            class="mx-2"
            fab
            dark
            color="indigo"
            @click.stop="createNewProject"
            ><v-icon hover>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <v-list-item
            v-for="project in getProjects"
            :key="'_' + project.id"
            link
          >
            <ProjectItem :project="project" />
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import { mapGetters } from "vuex";

import ProjectItem from "./OverlayProjectItem.vue";
export default {
  computed: {
    ...mapGetters("projects", ["getProjects"]),
  },
  methods: {
    createNewProject() {
      this.$emit("resetSelectedTab");
    },
  },
  components: {
    ProjectItem,
  },
};
</script>
