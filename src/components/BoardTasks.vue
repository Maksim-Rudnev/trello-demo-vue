<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div
      @click="closeForm"
      class="d-flex
      flex-row pt-5 px-2
      overflow-x-auto
      overflow-y-hidden
      h-100"
    >
      <chapter-board
        v-for="theme in themes"
        :key="theme.id"
        :theme="theme">
      </chapter-board>

      <v-btn
        @click.stop
        v-if="!visibleAddTheme"
        variant="plain"
        width="300"
        height="52"
        class="v-btn--border mx-3"
        v-on:click="openForm">
        + Add new theme
      </v-btn>

      <v-card
        @click.stop
        class="mx-3"
        min-width="300"
        height="120"
        v-if="visibleAddTheme">
        <add-theme @visibleAddThemeClose="closeForm"/>
      </v-card>

    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import { Theme } from '@/models/Theme';
import ChapterBoard from './ChapterBoard.vue';
import AddTheme from './AddTheme.vue';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
    AddTheme,
  },
  data() {
    return {
      visibleAddTheme: false,
    };
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
    openForm() {
      this.visibleAddTheme = true;
    },
    closeForm() {
      this.visibleAddTheme = false;
    },
  },
  beforeMount() {
    this.setThemes();
    this.setTasks();
  },
});
</script>
