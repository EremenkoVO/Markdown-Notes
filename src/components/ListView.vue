<template>
  <div class="p-4">
    <div name="Header">
      <div class="flex justify-content">
        <div></div>
      </div>
    </div>
    <div name="ViewNotes" class="flex flex-wrap justify-start">
      <div class="flex flex-wrap overflow select-none" style="margin-top: 80px">
        <NoteCard class="m-4" v-for="i in 1" :key="i" />
        <AddNewNote class="m-4" />
      </div>
    </div>
  </div>
</template>

<script>
import AddNewNote from './AddNewNote.vue';
import NoteCard from './NoteCard.vue';

export default {
  name: 'ListView',
  components: {
    AddNewNote,
    NoteCard,
  },
  props: {
    ListNotes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isListNotes() {
      return this.ListNotes.length > 0;
    },
  },
};
</script>

<style></style>
