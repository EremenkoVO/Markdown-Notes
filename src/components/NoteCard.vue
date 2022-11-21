<template>
  <div
    class="p-4 relative hw-note-card border-2 border-solid border-cornflower-blue-300 bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
    ref="boardCard"
    @mouseover="displayXMark(true)"
    @mouseleave="displayXMark(false)"
    @open="$emit('open')"
  >
    <div v-show="isVisibleDeleteBtn" class="absolute top-4 right-6">
      <button @click="$emit('delete-row')">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="rounded-full transition ease-in-out delay-75 hover:text-red-500"
        />
      </button>
    </div>
    <div class="text">
      <p class="text-blue-dark">
        {{ cutText(note.text) }}
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      default: null,
    },
  },
  setup() {
    let isVisibleDeleteBtn = ref(false);
    /**
     * Укорачивание текста
     * @param {string} text
     */
    const cutText = (text) => {
      if (text.length > 167) {
        return text.slice(0, 164).concat('...');
      }
      return text;
    };

    const displayXMark = (flag) => {
      isVisibleDeleteBtn.value = flag;
    };

    return {
      isVisibleDeleteBtn,
      cutText,
      displayXMark,
    };
  },
};
</script>
