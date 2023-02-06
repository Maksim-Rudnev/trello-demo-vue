<template>
  <draggable
    :list="tasksList"
    group="list"
    :component-data="{name:'list', type: 'transition-group'}"
    itemKey="id"
    @change="log"
    v-bind="dragOptions"
  >
    <template #item="{ element, index }">
      <task-item :task="element" :index="index"/>
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

export default defineComponent({
  name: 'TaskList',
  components: { TaskItem, draggable },
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
      tasksList: [] as ITask[],
    };
  },
  created() {
    this.refreshData();
  },

  methods: {
    refreshData() {
      this.tasksList = [...this.tasks];
    },
    log(evt: IDragEvent) {
      if ('added' in evt && evt.added?.element.id !== undefined) {
        db.tasks.update(evt.added?.element.id, {
          index: evt.added?.newIndex,
          themeId: this.themeId,
        });
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
        animation: 300,
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
});
</script>
