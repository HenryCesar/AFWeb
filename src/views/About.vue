<template>
  <div class="about">
    <v-system-bar class="content" color="primary"></v-system-bar>
    <Toolbar title="About" />

    <v-col style="padding: 0; margin: 0; height: calc(100% - 125px)">
      <v-row style="padding: 0; margin: 0; height: 100%">
        <v-main>
          <v-container class="content">v-main</v-container>
        </v-main>
      </v-row>
    </v-col>

    <v-footer class="content"
      >By Henrique Almeida <v-icon>mdi-flash</v-icon>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
.about {
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
import Toolbar from "../components/Toolbar.vue";

@Component({
  components: {
    Toolbar,
  },
})
export default class About extends Vue {}
</script>
