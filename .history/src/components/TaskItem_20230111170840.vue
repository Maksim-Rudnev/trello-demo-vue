<template>
  <v-card
    width="400"
    title="This is a title"
    text="This is content">
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Task },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  name: 'TaskItem',
});
</script>
