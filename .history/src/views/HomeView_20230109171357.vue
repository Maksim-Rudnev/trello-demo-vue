<template>
  <board-tasks />
</template>

<script lang="ts">

// Components
import BoardTasks from '../components/BoardTasks.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    BoardTasks,
  },
});
</script>
