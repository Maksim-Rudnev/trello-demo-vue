<template>
  <task-item
    v-for="task in tasks"
    :task="task"
    :key="task.id"
  >
  </task-item>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { Task } from '@/models/Task';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  components: { TaskItem },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
  },
  name: 'TaskList',
});
</script>
