<template>
    <div
    class="d-flex flex-row mt-5 overflow-x-auto h-screen"
  >
  <chapter-board class="overflow-y-auto"
    v-for="theme in themes"
    :key="theme.id"
    :theme="theme">
  </chapter-board>
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
      themes: (state: any): Theme[] => state.board.themes,
    }),
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
      setTasks: 'board/setTasks',
    }),
  },
  beforeMount() {
    this.setThemes();
    this.setTasks();
  },
});
</script>
