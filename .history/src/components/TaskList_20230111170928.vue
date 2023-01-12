<template>
  <div class="mx-5">

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

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
