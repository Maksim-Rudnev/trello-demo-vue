<template>
  <draggable
    :list="tasksList"
    group="list"
    :component-data="{ name:'list',
    type:'transition-group'}"
    itemKey="id"
    @change="log"
    ghost-class="ghost"
    v-bind="dragOptions"
  >
    <template #item="{ element, index }">
      <task-item
        :task="element"
        :index="index"
        class="border"
      />
    </template>
    <template #footer>
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
          >
            <v-btn
              variant="text"
              disabled
              style="opacity: 1;"
            >
              ADD TASK
            </v-btn>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <task-form
              @close="none"
              class="pa-0"
              :themeId="themeId"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </draggable>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { ITask } from '@/models/ITask';
import { IDragEvent } from '@/models/IDragEvent';
import draggable from 'vuedraggable';
import { db } from '@/db';
import { mapActions, mapMutations } from 'vuex';
import TaskItem from './TaskItem.vue';
import TaskForm from './TaskForm.vue';

export default defineComponent({
  name: 'TaskList',
  components: { TaskItem, draggable, TaskForm },
  props: {
    tasks: {
      type: Array as PropType<ITask[]>,
      required: true,
    },
    themeId: {
      type: Number,
    },
  },
  data() {
    return {
      panel: [],
      tasksList: [] as ITask[],
    };
  },
  created() {
    this.refreshData();
  },

  methods: {
    none() {
      this.panel = [];
    },
    refreshData() {
      this.tasksList = [...this.tasks];
    },
    log(evt: IDragEvent) {
      if ('added' in evt && evt.added?.element.id !== undefined) {
        db.tasks.update(evt.added?.element.id, {
          index: evt.added?.newIndex,
          themeId: this.themeId,
        });
        this.setTasks();
      }
    },
    ...mapActions({
      setTasks: 'board/setTasks',
    }),
    ...mapMutations({
      setUpdateData: 'board/setUpdateData',
    }),
  },
  watch: {
    tasks: {
      handler() {
        this.refreshData();
      },
      deep: true,
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 250,
        disabled: false,
      };
    },
  },
});
</script>
<style>
.border {
  border: 1px solid lightgrey;
  border-radius: 3px;
}

.ghost {
  opacity: 0;
}
</style>
