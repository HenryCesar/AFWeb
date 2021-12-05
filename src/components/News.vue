<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-text>
      <div>Notices of the Day</div>
      <p class="text-h6 text--primary">{{ news.title }}</p>
      <p>Author</p>
      <div class="text--primary">{{ news.author }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h6 text--primary">About the News</p>
          <p>{{ news.content }}<br /></p>
          <p>For more information: {{ news.url }}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = !reveal">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  props: ["news"],
})
export default class News extends Vue {
  reveal = false;
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
