<template>
  <div class="mdl-grid mdl-grid--no-spacing" @keydown.up="moveHighlightUp" @keydown.down="moveHighlightDown" @keydown.enter="itemSelectedByIndex(highlightedIndex)">
    <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label cha-suggestion">
      <input class="mdl-textfield__input" type="text" id="suggestion__input" v-model="internalModel">
      <label class="mdl-textfield__label" for="suggestion__input">{{label}}</label>
      <div class="cha-suggestion__list mdl-list">
        <template v-for="(item, index) in suggestions">
          <div class="mdl-list__item mdl-list__item--two-line mdl-js-ripple-effect" v-on:click="itemSelectedByIndex(index)" :class="{'key-hover': highlightedIndex === index}">
            <span class="mdl-list__item-primary-content">
              <span>{{item.title}}</span>
              <span class="mdl-list__item-sub-title">
                {{item.subtitle}}
              </span>
            </span>
            <span class="mdl-list__item-secondary-info">
              {{item.secondary}}
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    suggestions: {
      // each item in the list should have this structure;
      // { value(req), title(req), subtitle(opt), secondary(opt) }
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      internalModel: '',
      highlightedIndex: -1,
    };
  },
  computed: {
    lastSuggestionItemIndex() {
      return (this.suggestions.length - 1);
    },
  },
  methods: {
    emitOnChangeEvent() {
      this.$emit('changed', this.internalModel);
    },
    itemSelectedByIndex(index) {
      if (this.suggestions.length === 0) {
        return;
      }
      const item = this.suggestions[index];
      this.internalModel = item.value;
      this.highlightedIndex = -1;
    },
    moveHighlightUp() {
      this.highlightedIndex -= 1;
      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.lastSuggestionItemIndex;
      }
    },
    moveHighlightDown() {
      this.highlightedIndex += 1;
      if (this.highlightedIndex > this.lastSuggestionItemIndex) {
        this.highlightedIndex = 0;
      }
    },
  },
  watch: {
    internalModel() {
      this.emitOnChangeEvent();
    },
  },
};
</script>

<style>
.cha-suggestion .cha-suggestion__list {
  padding: 0;
  border: 1px solid #efefef;
  border-top: none;
}

.cha-suggestion__list .mdl-list__item:hover {
  background-color: #eee;
  cursor: pointer;
}

.cha-suggestion__list .mdl-list__item.key-hover {
  background-color: #eee;
}
</style>
