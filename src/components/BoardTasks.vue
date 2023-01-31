<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <edit-dialog>
    <task-form :task="getSelectedTask" action="EDIT"/>
  </edit-dialog>
  <div
      class="pt-5 px-2
      overflow-x-auto
      overflow-y-hidden
      h-100"
    >
    <transition-group class="d-flex flex-row " name="list" tag="ul">
      <chapter-board
        v-for="theme in themes"
        :key="theme.id"
        :theme="theme">
      </chapter-board>
      <v-sheet :key="-1">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel value="add" elevation="0" class="border">
            <v-expansion-panel-title style="opacity: .65;"
              expand-icon="mdi-plus" collapse-icon="mdi-minus" class="py-5">
              <v-btn variant="text" disabled style="opacity: 1;">ADD NEW THEME</v-btn>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <theme-form @close="none"/>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
  </transition-group>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { Theme } from '@/models/Theme';
import ChapterBoard from './ChapterBoard.vue';
import ThemeForm from './ThemeForm.vue';
import EditDialog from './EditDialog.vue';
import TaskForm from './TaskForm.vue';

export default defineComponent({
  name: 'BoardTasks',
  components: {
    ChapterBoard,
    ThemeForm,
    EditDialog,
    TaskForm,
  },
  data() {
    return {
      panel: [],
    };
  },
  computed: {
    ...mapState({
      themes: (state: any): Theme[] => state.board.themes,
    }),
    ...mapGetters({
      getSelectedTask: 'board/getSelectedTask',
    }),
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
      setTasks: 'board/setTasks',
    }),
    none() {
      this.panel = [];
    },
  },
  beforeMount() {
    this.setThemes();
    this.setTasks();
  },
});
</script>
<style scoped>
  .border {
    border: 1px solid;
    border-color: rgb(229,229,229);
    border-radius: 4px;
  }

  .v-expansion-panel-title {
    padding: 8px 36px;
  }
</style>

<style>
  .v-expansion-panel-text__wrapper {
    padding: 0 0 0 0;
  }
  .list-enter-active,
  .list-leave-active {
    transition: 0.5s all ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
