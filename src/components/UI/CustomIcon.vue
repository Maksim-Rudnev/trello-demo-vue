<template>
  <Icon/>
</template>

<script lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomIcon',
  components: { Icon },
});
</script>
