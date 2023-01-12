<template>
 <v-card
    width="400"
    title="This is a title"
    subtitle="This is a subtitle"
    text="This is content">
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  name: 'ChapterBoard',
});
</script>
