<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="page in pages"
        :key="page.id"
        text
        color="primary"
        @click="$route.path !== page.path && $router.push(page.path)"
      >
        {{ page.name }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> VueSchool </v-list-item-title>
          <v-list-item-subtitle> A School to learn VueJS </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="page in pages"
          :key="page.name"
          link
          @click="$route.path !== page.path && $router.push(page.path)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Page } from "@/interfaces/pages";
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["title"],
})
export default class Toolbar extends Vue {
  drawer = false;

  get pages(): Page[] {
    return this.$store.state.pages;
  }
}
</script>
