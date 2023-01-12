<template>
  <div class="mr-5 mx">
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
