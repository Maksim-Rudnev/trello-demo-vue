<template>
    <div
    class="d-flex flex-row mb-6"
  >
  <chapter-board v-for="themes"></chapter-board>
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
      themes: (state: any): Theme[] => state.board.theme,
    }),
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
  },
  beforeMount() {
    this.setThemes();
  },
});
</script>
