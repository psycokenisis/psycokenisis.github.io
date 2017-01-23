<template>
  <header id="external-header" class="mdl-layout__header" v-mdl>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        <router-link to="/">
          <i class="material-icons">home</i>
        </router-link>
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
    ]),
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
