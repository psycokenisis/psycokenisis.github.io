<template>
  <div id="home-view" v-mdl>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button">
      <external-header></external-header>
      <main class="mdl-layout__content">
        <div class="page-content mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            This is my home page
          </div>
        </div>
      </main>
      <compact-footer></compact-footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ExternalHeader from './../components/layout/ExternalHeader';
import CompactFooter from './../components/layout/CompactFooter';

export default {
  components: {
    ExternalHeader,
    CompactFooter,
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

<style scoped lang="scss">
</style>
