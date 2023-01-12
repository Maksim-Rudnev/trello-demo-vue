<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav

export default defineComponent({
  name: 'App',

  components: {
    NavBar,
  },
  data() {
    return {
      //
    };
  },
});
</script>
