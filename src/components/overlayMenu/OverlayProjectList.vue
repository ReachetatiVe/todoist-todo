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
            @click.stop="showOverlay = true"
            ><v-icon hover>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <!-- <v-list-item
            v-for="project in getProjects"
            :key="'_' + project.id"
            link
            ><Project
              v-bind:info="project"
              v-on:toggleProjectBrowser="toggleShowProjectBrowser"
            />
          </v-list-item> -->
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  
}
</script>
