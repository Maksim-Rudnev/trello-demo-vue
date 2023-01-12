<template>
  <div>
    <task-item
      v-for="task: anyTypeAnnotation in tasks"
      :task="task"
      :key="task.id"
    >
    </task-item>
  </div>
</template>

<script lang='ts'>
import { anyTypeAnnotation } from '@babel/types';
import { defineComponent } from 'vue';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  beforeMounted() {
    console.log(this.tasks);
  },
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  name: 'TaskList',
});
</script>
