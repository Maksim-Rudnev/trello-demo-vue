<template>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import BoardTasks from '../components/BoardTasks.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
