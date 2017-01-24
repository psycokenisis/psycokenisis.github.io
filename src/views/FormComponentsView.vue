<template>
  <div id="home-view" v-mdl>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button">
      <compact-header></compact-header>
      <main class="mdl-layout__content">
        <div class="page-content mdl-grid">
          <div class="mdl-cell mdl-cell--12-col">
            This page has a collection of web components I've made.
            Most of these leverage VueJS and Google's Material Design Lite (MDL).
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <h4>
              &lt;input-chipped&gt;
            </h4>
            This automatically 'chips' user input and supplies the output as an array.
            Type some stuff and watch the input 'chip' themselves
            <input-chipped :label="'tags'" :initial="tags.input" v-on:changed="updateTags"></input-chipped>
            Output: {{ tags.input }}
            <hr />
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <h4>
              &lt;input-suggestion&gt;
            </h4>
            This works similar to the autocomplete design pattern, but tailored to work with Vue and MDL.
            <input-suggestion :label="'country'" v-on:changed="updateCountry" :suggestions="suggestion.output"></input-suggestion>
            Output: "{{ suggestion.input }}"
            <hr />
          </div>
          <div class="mdl-cell mdl-cell--12-col">
            <h4>
              &lt;input-markdown&gt;
            </h4>
            A viewable and in-line editable markdown component. It leverages vue-markdown
            <input-markdown :source="markdown.input" v-on:changed="updateMarkdown"></input-markdown>
            Output: "{{ markdown.input }}"
            <hr />
          </div>
        </div>
        <compact-footer></compact-footer>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import lodash from 'lodash';
import CompactHeader from './../components/layout/CompactHeader';
import CompactFooter from './../components/layout/CompactFooter';

import InputChipped from './../components/form/Chipped';
import InputSuggestion from './../components/form/Suggestion';
import InputMarkdown from './../components/form/Markdown';

export default {
  components: {
    CompactHeader,
    CompactFooter,
    InputChipped,
    InputSuggestion,
    InputMarkdown,
  },
  data() {
    return {
      tags: {
        input: ['hello', 'world'],
      },
      suggestion: {
        input: '',
        datasource: ['Japan', 'USA', 'Mexico', 'Singapore', 'Australia', 'France', 'Germany', 'South Africa', 'India'],
        output: [],
      },
      markdown: {
        input: '# Hello world',
      },
    };
  },
  computed: {
    ...mapGetters([
    ]),
  },
  methods: {
    updateTags(tags) {
      this.tags.input = tags;
    },
    updateCountry(inputCountry) {
      this.suggestion.input = inputCountry;
      this.updateCountrySuggestions();
    },
    updateCountrySuggestions() {
      const inputOrigin = this.suggestion.input;
      if (!inputOrigin) {
        this.suggestion.output = [];
        return;
      }
      const filtered = lodash.filter(this.suggestion.datasource, country => (
        country.toLowerCase().indexOf(inputOrigin.toLowerCase()) !== -1
      ));
      this.suggestion.output = lodash.map(filtered, item => (
        {
          value: item,
          title: item,
          subtitle: '',
          secondary: '',
        }
      ));
    },
    updateMarkdown(markdown) {
      this.markdown.input = markdown;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
