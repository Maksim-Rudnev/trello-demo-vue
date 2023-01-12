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
  methods: {
    
  }
});
</script>
