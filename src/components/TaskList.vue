<template>
  <transition-group name="list" tag="ul">
    <task-item
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    >
    </task-item>
  </transition-group>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { Task } from '@/models/Task';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  name: 'TaskList',
  components: { TaskItem },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
  },
});
</script>
<style scoped>
  .list-enter-active,
  .list-leave-active {
  transition: 0.5s all ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
