<template>
  <div class="mdl-grid mdl-grid--no-spacing" v-mdl>
    <div class="mdl-cell mdl-cell--12-col editable">
      <div class="editable__action-bar edtiable--inactive" v-show="!isEditorActive">
        <button class="mdl-button mdl-js-button mdl-button--icon" v-on:click="enableEditor">
          <i class="material-icons">mode_edit</i>
        </button>
      </div>
      <div class="editable__action-bar edtiable--active" v-show="isEditorActive">
        <button class="mdl-button mdl-js-button mdl-button--icon" v-on:click="disableEditor">
          <i class="material-icons">cancel</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect" :disabled="!isEditorActiveWithPreview" v-on:click="togglePreviewState">
          Edit
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect" :disabled="isEditorActiveWithPreview" v-on:click="togglePreviewState">
          Preview
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect" v-on:click="saveInput">
          Save
        </button>
      </div>

      <div class="editable__markdown" v-show="!isEditorActive || isEditorActiveWithPreview">
        <vue-markdown :html="false" :source="markdownContent"></vue-markdown>
      </div>

      <div class="editable__input" v-show="isEditorActive">
        <div class="mdl-textfield mdl-js-textfield" v-show="isEditorActive && !isEditorActiveWithPreview">
          <textarea class="mdl-textfield__input" type="text" rows= "3" id="blurb" v-model="markdown"></textarea>
          <label class="mdl-textfield__label" for="blurb"></label>
          <small>
            <a href="http://spec.commonmark.org/" target="_blank">commonmark supported</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* globals confirm */
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown,
  },
  props: {
    source: {
      type: String,
      default() {
        return '';
      },
    },
    // TODO(ajt): Disable editing
  },
  data() {
    return {
      isActive: false,
      isPreview: false,
      markdown: '',
    };
  },
  computed: {
    isEditorActive() {
      return this.isActive;
    },
    isEditorActiveWithPreview() {
      return this.isEditorActive && this.isPreview;
    },
    markdownContent() {
      if (this.isEditorActive) {
        return this.markdown;
      }
      return this.source;
    },
  },
  methods: {
    enableEditor() {
      this.isActive = true;
      this.$nextTick(() => {
        this.markdown = this.source;
      });
    },
    togglePreviewState() {
      this.isPreview = !this.isPreview;
    },
    resetEditor() {
      this.isActive = false;
      this.isPreview = false;
      this.markdown = '';
    },
    disableEditor() {
      if (this.markdown !== this.source) {
        const proceedWithoutSave = confirm('Unsaved changed will be lost. Proceed without saving?');
        if (proceedWithoutSave) {
          this.resetEditor();
        }
      } else {
        this.resetEditor();
      }
    },
    saveInput() {
      this.$emit('changed', this.markdown);
      this.resetEditor();
    },
  },
};
</script>

<style>
</style>
