<template>
  <v-app-bar collapse :elevation="9">
    <v-app-bar-title>Photos</v-app-bar-title>
  </v-app-bar>
  <board-tasks />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import BoardTasks from '../components/BoardTasks.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    BoardTasks,
  },
});
</script>
