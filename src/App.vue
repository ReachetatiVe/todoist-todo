<template>
  <v-app id="inspire">
    <template v-if="isAutorized">
      <v-navigation-drawer v-model="drawer" app>
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Главная</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined> <v-icon>mdi-logout</v-icon> Выйти</v-btn>
      </v-app-bar>
    </template>

    <v-main>
      <v-progress-linear
        indeterminate
        height="4"
        color="primary"
        v-if="isLoading"
      >
      </v-progress-linear>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", { isAutorized: "getIsAutorized" }),
    ...mapGetters({ isLoading: "getIsLoading" }),
  },
  data: () => ({ drawer: false, loader: false }),
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
