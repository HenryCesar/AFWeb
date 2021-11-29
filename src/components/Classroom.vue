<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">VueSchool</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ classroom.name }}</v-list-item-title
        >
        <v-card-subtitle
          >{{ classroom.location }} {{ classroom.date.toLocaleString() }}
        </v-card-subtitle>
        <v-card-text>{{ classroom.description }}</v-card-text>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text> Go in! </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  props: ["classroom"],
})
export default class Classroom extends Vue {}
</script>
