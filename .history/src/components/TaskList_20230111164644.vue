<template>
  <div class="mx-5">

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tas: {
      type: Object,
      required: true,
    },
  },
  name: 'TaskList',
});
</script>
