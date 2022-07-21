<template>
  <div>Redirecting...</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Redirect-page",
  computed: {
    ...mapGetters("user", ["getClientId", "getClientSecret"]),
  },
  methods: {
    ...mapActions("user", ["getApi"]),
    getToken(code) {
      console.log("getToken");
      axios
        .post(
          `https://todoist.com/oauth/access_token?client_id=${this.getClientId}&client_secret=${this.getClientSecret}&code=${code}`
        )
        .then((response) => {
          const token = response.data.access_token;
          this.getApi(token);
          this.$router.push("./home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        if (route.query.code !== null && route.query.code !== undefined) {
          this.getToken(route.query.code);
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
