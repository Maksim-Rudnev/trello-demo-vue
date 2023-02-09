<template>
  <board-tasks/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

import BoardTasks from '../components/BoardTasks.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    BoardTasks,
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
      setTasks: 'board/setTasks',
    }),
  },
  created() {
    this.setTasks();
    this.setThemes();
  },
});
</script>
