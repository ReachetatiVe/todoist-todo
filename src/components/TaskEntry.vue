<template>
  <v-list>
    <v-list-group :value="true" no-action sub-group>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Subtask1</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="([title], i) in admins" :key="i" link>
        <v-list-item-title v-text="title"></v-list-item-title>
      </v-list-item>
    </v-list-group>
		<v-divider></v-divider>
    <v-list-group no-action sub-group>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Subtask2</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="subtask in subsubtasks" :key="subtask.id" link>
        <v-list-item-title v-text="subtask.title"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    subsubtasks: [
      {
        title: "subSubTask1",
      },
      {
        title: "subSubTask2",
      },
    ],
  }),
};
</script>
