<template>
  <div class="mx-5">
    <task-item
      v-for="task in tasks"
    >
    </task-item>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import TaskItem from './TaskItem.vue';

export default defineComponent({
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
