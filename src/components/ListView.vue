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
            class="m-4"
            v-for="rows in dataRows"
            :key="rows.id"
            v-model:note="rows.doc"
            @delete-row="$emit('delete-row', rows.doc)"
            @open="$emit('open', rows.doc)"
          />
        </template>

        <AddNewNote class="m-4" @create="$emit('create')" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
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
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const isData = computed(() => {
      return props.data !== null;
    });

    const dataRows = computed(() => {
      return props.data?.rows;
    });

    return {
      isData,
      dataRows,
    };
  },
};
</script>

<style></style>
