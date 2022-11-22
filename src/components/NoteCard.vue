<template>
  <div
    class="p-4 relative hw-note-card overflow-hidden border-2 border-solid border-cornflower-blue-300 bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
    @mouseover="displayXMark(true)"
    @mouseleave="displayXMark(false)"
    @click.capture="$emit('open')"
  >
    <div v-show="isVisibleDeleteBtn" class="absolute top-4 right-6">
      <button @click.capture="$emit('delete-row')">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="rounded-full transition ease-in-out delay-75 hover:text-red-500"
        />
      </button>
    </div>
    <div class="text">
      <p class="text-blue-dark">
        <Markdown :source="note.text" breaks html linkify />
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';

export default {
  name: 'NoteCard',
  components: {
    Markdown,
  },
  props: {
    note: {
      type: Object,
      default: () => ({ text: '' }),
    },
  },
  setup() {
    let isVisibleDeleteBtn = ref(false);

    const displayXMark = (flag) => {
      isVisibleDeleteBtn.value = flag;
    };

    return {
      isVisibleDeleteBtn,
      displayXMark,
    };
  },
};
</script>
