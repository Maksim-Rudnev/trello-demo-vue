<template>
  <div class="mx-5">
    {{ theme.name }}
    <div>

    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: { Ta }
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  name: 'ChapterBoard',
  computed: {
    ...mapGetters({
      getTaskByThemeId: 'board/getTaskByThemeId',
    }),
  },
});
</script>
