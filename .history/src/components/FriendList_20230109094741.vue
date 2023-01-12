<template>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      {{ friend.name }}, {{ friend.age }}
    </li>
  </ul>
</template>

<script>
import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';
import { db } from '@/db';

export default {
  name: 'FriendList',
  data() {
    return
  },
  setup() {
    return {
      db,
      friends: useObservable(
        liveQuery(() => db.friends.toArray()),
      ),
    };
  },
};
</script>
