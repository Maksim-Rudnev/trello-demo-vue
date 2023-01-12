<template>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import TaskList from './TaskList.vue';

export default defineComponent({
  components: { TaskList },
  data() {
    return {
      visibleAddModel: false,
    };
  },
  methods: {
    openForm(event: Event) {
      console.log(event);
    },
  },
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
