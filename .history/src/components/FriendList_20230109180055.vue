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
import mapActions, { mapMutations, MapperForActionWithNamespace } from 'vuex';

export default {
  name: 'FriendList',
  data() {
    return {
      db,
      themes: useObservable(from(db.themes.toArray())),
    };
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
  },
  mounted() {
    this.setThemes();
  },

};
</script>
