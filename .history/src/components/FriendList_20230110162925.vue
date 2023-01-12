<template>
  <ul>
    <li v-for="theme in themes" :key="theme.id">
      {{ theme.name }}
    </li>
  </ul>
</template>

<script lang="ts">

import { useObservable } from '@vueuse/rxjs';
import { db } from '@/db';
import { from } from 'rxjs';
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FriendList',
  data() {
    return {
      db,
      themes: useObservable(from(db.themes.toArray())),
    };
  },
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
  },
  mounted() {
    this.setThemes();
  },
);
};
</script>
