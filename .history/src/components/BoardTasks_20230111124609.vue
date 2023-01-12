<template>
    <div
    class="d-flex flex-row mb-6"
  >
  <chapter-board></chapter-board>
  </div>
</template>

<script lang='ts'>
import { thisExpression } from '@babel/types';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import ChapterBoard from './ChapterBoard.vue';
import { Theme } from '@/models/Theme';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
  },
  computed: {
    ...mapState({
      theme: (state) => state.board.theme : Theme[]; },
    }),
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
  },
});
</script>
