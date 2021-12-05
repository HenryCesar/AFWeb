<template>
  <div class="newspaper">
    <v-system-bar class="content" color="primary"></v-system-bar>
    <Toolbar title="Newspaper" />

    <v-col style="padding: 0; margin: 0; height: calc(100% - 125px)">
      <v-row style="padding: 0; margin: 0; height: 100%">
        <v-main>
          <v-container class="content"
            ><v-col
              ><News
                class="news"
                v-for="news in newsList"
                :key="news.id"
                :news="news"
              /> </v-col
          ></v-container>
        </v-main>
      </v-row>
    </v-col>

    <v-footer class="content"
      >By Henrique Almeida <v-icon>mdi-flash</v-icon>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
.news {
  width: 100%;
  margin-bottom: 2rem;
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
import News from "../components/News.vue";
import { INews } from "@/interfaces/news";

@Component({
  components: {
    Toolbar,
    News,
  },
  mounted() {
    this.$store.dispatch("loadNews");
  },
})
export default class Newspaper extends Vue {
  get newsList(): INews[] {
    return this.$store.state.newsList;
  }
}
</script>
