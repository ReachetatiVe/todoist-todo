<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title class="text-h4 grey lighten-2">
          Авторизация
        </v-card-title>

        <v-card-text class="text-h6 pt-3">
          <p>
            <v-icon color="warning" class="mr-1 pb-1">mdi-alert-circle </v-icon>
            Чтобы начать использовать приложение, вам необходимо иметь аккаунт
            на <a href="https://todoist.com/ru">Todoist</a>.
          </p>
          <p>Если он уже есть, нажмите кнопку ниже.</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn large rounded color="primary" text @click="authorization">
            <v-icon>mdi-login</v-icon> Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({ dialog: true }),
  computed: {
    ...mapGetters("user", ["getClientId"]),
  },
  methods: {
    authorization() {
      localStorage.setItem("isRedirected", true);
      window.location.href = `https://todoist.com/oauth/authorize?client_id=${this.getClientId}&scope=data:read_write,data:delete&state=secretstring`;
    },
  },
};
</script>
