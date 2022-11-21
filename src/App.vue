<template>
  <div
    class="w-full z-20 flex justify-between items-center p-6 ft-montserrat-600 select-none fixed bg-white"
  >
    <h1 class="text-cornflower-blue-800 text-3xl">Your notes</h1>
    <h3 class="text-cornflower-blue-200">{{ lengthData }}</h3>
    <div class="border border-cornflower-blue-200 p-2 rounded-full">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="ml-2 mr-2 text-cornflower-blue-300"
      />
      <input type="search" class="text-cornflower-blue-800" />
    </div>
  </div>

  <div>
    <ListView v-model:data="dataDB" @delete-row="deleteRow" @open="open" />
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import ListView from './components/ListView.vue';
import db from './db.js';

export default {
  name: 'App',
  components: {
    ListView,
  },
  setup() {
    let dataDB = ref({});

    const getAllNotes = async () => {
      dataDB.value = await db.getAllNotes();
    };

    const lengthData = computed(() => {
      return dataDB.value?.rows?.length;
    });

    const deleteRow = async (note) => {
      console.log('delete');
      db.deleteNote(note);
      getAllNotes();
    };

    const open = async () => {
      console.log('open');
    };

    onMounted(() => {
      getAllNotes();
    });

    return {
      dataDB,
      lengthData,
      getAllNotes,
      deleteRow,
      open,
    };
  },
};
</script>
