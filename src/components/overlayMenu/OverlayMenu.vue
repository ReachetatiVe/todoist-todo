<template>
  <div>
    <v-list>
      <v-list-item-group v-model="selectedTab" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <ProjectList @resetSelectedTab="resetSelectedTab" />
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import ProjectList from "./OverlayProjectList.vue";

export default {
  data: () => ({
    items: [
      {
        icon: "mdi-inbox",
        text: "Inbox",
      },
      {
        icon: "mdi-star",
        text: "Star",
      },
      {
        icon: "mdi-send",
        text: "Send",
      },
      {
        icon: "mdi-email-open",
        text: "Drafts",
      },
    ],
    selectedTab: 1,
  }),
  methods: {
    resetSelectedTab() {
      console.log("resetSelectedTab");
      this.selectedTab = -1;
    },
  },
  components: {
    ProjectList,
  },
};
</script>
