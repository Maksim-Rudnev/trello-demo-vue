<template>
    <div
    class="d-flex flex-row mb-6"
  >
  <chapter-board></chapter-board>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ChapterBoard from './ChapterBoard.vue';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
  },
  methods: {
    
  }
});
</script>
