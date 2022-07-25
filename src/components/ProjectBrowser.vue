<template>
  <div class="pl-3">
    <div class="d-flex justify-space-between align-center pb-2 pt-2 pr-2">
      <h2>{{ getProject?.name }}</h2>
      <v-btn plain small width="150" @click="togglePanels">
        {{ panels.length === 0 ? "Развернуть" : "Свернуть" }}
        <v-icon small>
          {{ panels.length === 0 ? "mdi-chevron-down" : "mdi-chevron-up" }}
        </v-icon>
      </v-btn>
    </div>

    <!-- Sections -->
    <v-expansion-panels v-model="panels" multiple>
      <Section v-for="(item, i) in getSections" :key="i" :section="item" />
    </v-expansion-panels>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Section from "./SectionEntry.vue";
export default {
  data() {
    return {
      panels: [],
      items: 5,
      projectId: Number,
    };
  },
  computed: {
    ...mapGetters("projects", { projects: "getProjects" }),
    ...mapGetters("sections", { sections: "getSections" }),

    getProject() {
      return this.projects.find((item) => {
        return item.id === this.projectId;
      });
    },
    getSections() {
      return this.sections.filter((section) => {
        return section.projectId === this.projectId;
      });
    },
  },
  methods: {
    togglePanels() {
      this.panels.length === 0
        ? (this.panels = [...Array(this.items).keys()].map((k, i) => i))
        : (this.panels = []);
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        if (route.query.id) {
          this.projectId = Number(route.query.id);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  components: {
    Section,
  },
};
</script>
