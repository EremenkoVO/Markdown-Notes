<template>
  <div
    class="p-4 relative hw-note-card border-2 border-solid border-blue-light bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
    ref="boardCard"
    @mouseover="displayXMark(true)"
    @mouseleave="displayXMark(false)"
  >
    <div v-show="true" class="absolute top-0 right-0">
      <button
        class="rounded p-2 rounded-full bg-white text-red drop-shadow-2xl hover:bg-red-lightest"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <div class="text">
      <p class="text-blue-dark">
        {{ cutText(text) }}
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'NoteCard',
  props: {
    text: {
      type: String,
      default: '',
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
