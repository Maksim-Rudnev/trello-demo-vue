<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
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
