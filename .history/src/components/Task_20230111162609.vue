<v-card
width="400"
title="This is a title"
subtitle="This is a subtitle"
text="This is content"
></v-card>
<template>
  <div class="mx-5">
    {{ theme.name }}
  </div>
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
