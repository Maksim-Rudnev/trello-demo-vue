<template>
  <div>
    <task-item
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    >
    </task-item>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import TaskItem from './TaskItem.vue';
import { Task } from '@/models/Task';

export default defineComponent({
  beforeMounted() {
    console.log(this.tasks);
  },
  components: { TaskItem },
  props: {
    tasks: {
      type: Array as PropType<,
      required: true,
    },
  },
  name: 'TaskList',
});
</script>
