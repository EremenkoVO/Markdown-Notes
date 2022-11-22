<template>
  <div>
    <div v-if="isEdit">
      <textarea
        class="w-full outline-none p-2 border-2 rounded-md border-cornflower-blue-300 focus:border-cornflower-blue-500"
        rows="10"
        v-model="editNote.text"
      ></textarea>
    </div>
    <div v-else-if="isView">
      <div class="markdown-body mb-4">
        <Markdown :source="note.text" breaks html linkify />
      </div>
    </div>
    <menu>
      <button
        v-if="isEdit"
        class="p-2 font-medium text-white rounded-2xl transition-all bg-cornflower-blue-400 hover:bg-cornflower-blue-500"
        @click="save(note)"
      >
        Сохранить
      </button>
      <button
        v-if="isView"
        class="p-2 font-medium text-white rounded-2xl transition-all bg-cornflower-blue-400 hover:bg-cornflower-blue-500"
        @click="edit(note)"
      >
        Редактировать
      </button>
    </menu>
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
export default {
  name: 'CardEditor',
  components: {
    Markdown,
  },
  props: {
    note: {
      type: Object,
    },
    mode: {
      type: String,
      default: 'view',
    },
  },
  data() {
    return {
      editNote: {},
    };
  },
  computed: {
    isEdit() {
      return this.mode == 'edit';
    },

    isView() {
      return this.mode == 'view';
    },
  },
  deactivated() {
    console.log('шоырвопло');
    this.editNote.text = '';
  },
  methods: {
    save(note) {
      this.$emit('save', { id: note.id, text: this.editNote.text });
      this.editNote.text = '';
    },
    edit(note) {
      this.editNote.text = note.text;
      this.$emit('edit', note);
    },
  },
};
</script>
