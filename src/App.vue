<template>
  <v-app id="inspire">
    <template v-if="isAutorized">
      <v-navigation-drawer
        v-model="drawer"
        app
        :style="{ padding: ' 0 !important' }"
      >
        <OverlayMenu />
      </v-navigation-drawer>

      <v-app-bar app color="light-green lighten-3">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Главная</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="logout" color="primary lighten-2" rounded>
          <v-icon>mdi-logout</v-icon> Выйти</v-btn
        >
      </v-app-bar>
    </template>

    <v-main>
      <!-- <v-progress-linear
        indeterminate
        height="4"
        color="primary"
        v-if="isLoading"
      >
      </v-progress-linear> -->
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import OverlayMenu from "./components/overlayMenu/OverlayMenu.vue";

export default {
  computed: {
    ...mapGetters("user", { isAutorized: "getIsAutorized" }),
    ...mapGetters({ isLoading: "getIsLoading" }),
    ...mapMutations("user", ["clearUser"]),
    ...mapActions("user", ["initializeStore"]),
  },
  data: () => ({
    drawer: false,
    loader: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),
  methods: {
    logout() {
      this.clearUser;
      this.$router.push("./auth");
    },
  },
  components: {
    OverlayMenu,
  },
  mounted() {
    this.initializeStore;
    if (this.isAutorized && this.$route.path != "/home") {
      this.$router.push("./home");
    }
    let isRedirected;
    try {
      isRedirected = localStorage.getItem("isRedirected");
    } catch (error) {
      localStorage.removeItem("isRedirected");
      this.$router.push("./auth");
    }
    if (!this.isAutorized && !isRedirected) this.$router.push("./auth");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
