<template>
  <v-card
    class=""
    width="400"
    :title="task.title"
    :text="task.text">
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  name: 'TaskItem',
});
</script>
