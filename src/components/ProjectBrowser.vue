<template>
  <div class="pl-3">
    <!-- <div class="text-center d-flex pb-4">
        <v-btn @click="all"> all </v-btn>
        <div>{{ panel }}</div>
        <v-btn @click="none"> none </v-btn>
      </div> -->
    <div class="d-flex justify-space-between align-center pb-2 pt-2 pr-2">
      <h2>Имя проекта</h2>
      <v-btn plain small width="150" @click="togglePanels">
        {{ panel.length === 0 ? "Развернуть" : "Свернуть" }}
        <v-icon small>
          {{ panel.length === 0 ? "mdi-chevron-down" : "mdi-chevron-up" }}
        </v-icon>
      </v-btn>
    </div>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      panel: [],
      items: 5,
    };
  },
  methods: {
    togglePanels() {
      this.panel.length === 0
        ? (this.panel = [...Array(this.items).keys()].map((k, i) => i))
        : (this.panel = []);
    },
  },
};
</script>
