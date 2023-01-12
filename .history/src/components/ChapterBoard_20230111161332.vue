<template>
  <div class="mr-5 mx-10">
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
