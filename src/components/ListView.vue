<template>
  <div class="p-4">
    <div name="Header">
      <div class="flex justify-content">
        <div></div>
      </div>
    </div>
    <div name="ViewNotes" class="flex flex-wrap justify-start">
      <div class="flex flex-wrap overflow select-none" style="margin-top: 80px">
        <template v-if="isData">
          <NoteCard
            v-for="rows in data.rows"
            :key="rows.id"
            class="m-4"
            v-model:note="rows.doc"
            @open="openNote(rows.doc), $emit('open')"
          />
        </template>

        <AddNewNote class="m-4" @open="$emit('open')" />
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
  setup() {
    const store = useStore();

    const isData = computed(() => {
      return store.getters.getLengthNotes > 0;
    });

    const data = computed(() => {
      return store.getters.getAllNotes;
    });

    const openNote = (note) => {
      store.dispatch('setMode', 'view');
      store.dispatch('setNote', note);
    };

    return {
      isData,
      data,
      openNote,
    };
  },
};
</script>

<style></style>
