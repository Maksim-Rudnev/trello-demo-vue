<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <edit-dialog>
    <task-form :task="getSelectedTask" action="EDIT"/>
  </edit-dialog>
  <div
    class="pt-5
    px-2
    overflow-x-auto
    overflow-y-hidden
    h-100
    d-flex
    flex-row
    aliceblue"
  >
    <draggable
      class="d-flex flex-row"
      :list="themes"
      group="theme"
      :component-data="{name:'list', type: 'transition-group'}"
      itemKey="id"
      @change="log"
      v-bind="dragOptions"
    >
      <template #item="{ element, index }" >
        <chapter-board
          :theme="element"
          :index="index"
          class="mx-3"
        />
      </template>
    </draggable>
    <v-sheet :key="-1" height="78">
      <v-expansion-panels v-model="panel">
        <v-expansion-panel
          value="add"
          elevation="0"
          class="border"
        >
          <v-expansion-panel-title
            style="opacity: .65;"
            expand-icon="mdi-plus"
            collapse-icon="mdi-minus"
            class="py-5"
          >
            <v-btn
              variant="text"
              disabled
              style="opacity: 1;"
            >
              ADD NEW THEME
            </v-btn>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <theme-form @close="none"/>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { ITheme } from '@/models/ITheme';
import draggable from 'vuedraggable';
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
    draggable,
  },
  data() {
    return {
      panel: [],
    };
  },
  computed: {
    ...mapState({
      themes: (state: any): ITheme[] => state.board.themes,
    }),
    ...mapGetters({
      getSelectedTask: 'board/getSelectedTask',
    }),
    dragOptions() {
      return {
        animation: 250,
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  methods: {
    log() {
      this.setThemes();
    },
    ...mapActions({
      setTasks: 'board/setTasks',
      setThemes: 'board/setThemes',
    }),
    none() {
      this.panel = [];
    },
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
    padding: 0;
  }
  .aliceblue {
    background-color: aliceblue;
  }
</style>
