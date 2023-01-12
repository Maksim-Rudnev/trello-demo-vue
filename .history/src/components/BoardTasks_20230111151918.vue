<template>
    <div
    class="d-flex flex-row mb-6"
  >
  <chapter-board></chapter-board>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import { Theme } from '@/models/Theme';
import ChapterBoard from './ChapterBoard.vue';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
  },
  computed: {
    ...mapState({
      theme: (state: any): Theme[] => state.board.theme,
    }),
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
  },
});
</script>
