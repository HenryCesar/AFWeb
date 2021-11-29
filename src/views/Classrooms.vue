<template>
  <div class="classrooms">
    <v-system-bar class="content" color="primary"></v-system-bar>
    <Toolbar title="Classrooms" />

    <v-col style="padding: 0; margin: 0; height: calc(100% - 125px)">
      <v-row style="padding: 0; margin: 0; height: 100%">
        <v-main>
          <v-container class="content"
            ><v-col
              ><Classroom
                class="classroom"
                v-for="classroom in classrooms"
                :key="classroom.id"
                :classroom="classroom"
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
.classrooms {
  height: 100%;
}
.classroom {
  width: 100%;
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
import Classroom from "../components/Classroom.vue";

@Component({
  components: {
    Toolbar,
    Classroom,
  },
})
export default class Classrooms extends Vue {
  get classrooms(): Classroom[] {
    return this.$store.state.classrooms;
  }
}
</script>
