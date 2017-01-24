<template>
  <header id="header" class="mdl-layout__header" v-mdl>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        <span>
          {{ title }}
        </span>
      </span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" exact>Home</router-link>
        <router-link class="mdl-navigation__link" to="/components/form" exact>Components</router-link>
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
    title() {
      return this.$route.meta.title || '';
    },
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import './../../assets/globals.scss';

.router-link-active {
  background-color: $psy-primary-hex;
}
</style>
