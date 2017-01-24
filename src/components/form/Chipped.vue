<!-- Form:Chipped is an inputfield which automatically groups space-delimited content into -->
<!-- 'chips' or tags. Each 'word' is put into a list which is accessible via the 'model' -->
<template>
  <div class="mdl-grid mdl-grid--no-spacing">
    <div class="mdl-cell mdl-cell--12-col cha-chipped">
      <span class="mdl-chip mdl-chip--deletable cha-chipped__chips" v-for="(item, index) in internalModel">
        <span class="mdl-chip__text">{{item}}</span>
        <button type="button" class="mdl-chip__action" v-on:click="removeItemByIndex(index)">
          <i class="material-icons">cancel</i>
        </button>
      </span>
      <!-- TODO(ajt): Allow this to be injected so we can make it more powerful by including suggestions -->
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label cha-chipped__input"
        @keydown.enter="addItem" @keydown.space="addItem" @keydown.delete="maybeRemovePreviousItem">
        <input class="mdl-textfield__input" type="text" id="chipped__input" v-model="textInput">
        <label class="mdl-textfield__label" for="chipped__input">{{label}}</label>
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
    initial: {
      type: Array,
      default() {
        return [];
      },
    },
    // TODO(ajt): toggle for duplicates
    // TODO(ajt): make the input field visible so we can power other things (?)
  },
  data() {
    return {
      textInput: '',
      internalModel: this.initial,
    };
  },
  computed: {
    hasItems() {
      return this.internalModel.length > 0;
    },
  },
  methods: {
    emitOnChangeEvent() {
      this.$emit('changed', this.internalModel);
    },
    addItem() {
      const inputItem = this.textInput.trim();
      if (!inputItem) { return; }
      this.internalModel.push(inputItem);
      this.textInput = '';
    },
    maybeRemovePreviousItem() {
      if (!this.textInput && this.hasItems) {
        this.internalModel.pop();
      }
    },
    removeItemByIndex(index) {
      this.internalModel.splice(index, 1);
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
.cha-chipped {

}

.cha-chipped__chips {

}

.cha-chipped__input {
  top: 4px;
}

</style>
