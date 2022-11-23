<template>
  <div class="p-4">
    <div name="Header">
      <div class="flex justify-content">
        <div></div>
      </div>
    </div>
    <div name="ViewNotes" class="flex flex-wrap justify-start">
      <div class="flex flex-wrap overflow select-none" style="margin-top: 80px">
        <AddNewNote class="m-4" @open="$emit('open')" />
        <template v-if="isData">
          <NoteCard
            v-for="row in data"
            :key="row.id"
            class="m-4"
            v-model:note="row.doc"
            @open="openNote(row.doc), $emit('open')"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AddNewNote from './AddNewNote.vue';
import NoteCard from './NoteCard.vue';

export default {
  name: 'ListView',
  components: {
    AddNewNote,
    NoteCard,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const store = useStore();

    const isData = computed(() => {
      return store.getters.getLengthNotes > 0;
    });

    const openNote = (note) => {
      store.dispatch('setMode', 'view');
      store.dispatch('setNote', note);
    };

    return {
      isData,
      openNote,
    };
  },
};
</script>

<style></style>
