<template>
  <div
    class="w-full flex justify-between items-center p-6 ft-montserrat-600 select-none fixed bg-white"
  >
    <h1 class="text-blue-dark">Your notes</h1>
    <h3 class="text-blue-lightest">1</h3>
    <div class="border border-blue-light p-2 rounded rounded-full">
      <input type="search" />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="mr-2 text-blue-light"
      />
    </div>
  </div>

  <div>
    <ListView v-model:data="dataDB" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
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

    onMounted(() => {
      getAllNotes();
    });

    return {
      dataDB,
      getAllNotes,
    };
  },
};
</script>
