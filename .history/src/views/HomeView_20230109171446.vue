<template>
  <board-tasks />
</template>

<script lang="ts">

import { defineComponent } from '@vue/runtime-core';
import BoardTasks from '../components/BoardTasks.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    BoardTasks,
  },
});
</script>
