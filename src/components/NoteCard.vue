<template>
  <div
    class="p-4 hw-note-card border-2 border-solid border-blue-light bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
  >
    <p>
      {{ cutText(text) }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'NoteCard',
  props: {
    text: {
      type: String,
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui,
      eveniet amet saepe odio dolores, sed facilis hic eius vero omnis suscipit
      nemo cumque aperiam laudantium corrupti? Commodi, exercitationem eius.`,
    },
  },
  setup() {
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

    return {
      cutText,
    };
  },
};
</script>
