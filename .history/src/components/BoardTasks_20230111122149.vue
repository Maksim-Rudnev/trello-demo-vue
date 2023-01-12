<template>
    <div
    class="d-flex flex-row mb-6"
  >
    <v-sheet class="ma-2 pa-2">Flex item 1</v-sheet>
    <v-sheet class="ma-2 pa-2">Flex item 2</v-sheet>
    <v-sheet class="ma-2 pa-2">Flex item 3</v-sheet>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ChapterBoard from '../components/ChapterBoard.vue';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
  },
});
</script>
