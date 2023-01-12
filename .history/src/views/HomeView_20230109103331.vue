<template>
  <board-tasks />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import BoardTasks from '../components/BoardTasks.vue';

export default {
  name: 'HomeView',

  components: {
    BoardTasks,
  },
};
</script>
