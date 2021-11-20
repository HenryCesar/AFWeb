<template>
  <v-card class="mx-auto overflow-hidden" height="100vh" width="100vw">
    <v-system-bar class="content">v-system-bar</v-system-bar>

    <v-app-bar class="content">v-app-bar</v-app-bar>

    <v-col style="padding: 0; margin: 0; height: calc(100% - 180px)">
      <v-row style="padding: 0; margin: 0; height: 100%">
        <v-navigation-drawer class="content">
          v-navigation-drawer
        </v-navigation-drawer>

        <v-main>
          <v-container class="content">v-main</v-container>
        </v-main>
      </v-row>
    </v-col>

    <v-footer class="content">v-footer</v-footer>

    <v-bottom-navigation class="content"
      >v-bottom-navigation</v-bottom-navigation
    >
  </v-card>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
