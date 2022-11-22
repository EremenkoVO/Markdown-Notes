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
    <ListView
      v-model:data="dataDB"
      @delete-row="deleteRow"
      @open="open"
      @create="create"
    />
  </div>

  <VueFinalModal
    v-if="isVisibleModal"
    v-model="isVisibleModal"
    classes="modal-container"
    content-class="modal-content"
  >
    <CardEditor
      v-model:note="noteEdit"
      :mode="mode"
      @save="save"
      @edit="edit"
    />
  </VueFinalModal>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';
import CardEditor from './components/CardEditor.vue';
import ListView from './components/ListView.vue';
import db from './db.js';

export default {
  name: 'App',
  components: {
    ListView,
    VueFinalModal,
    CardEditor,
  },
  setup() {
    let dataDB = ref({});
    let isVisibleModal = ref(false);
    let mode = ref('view');
    let noteEdit = ref({});

    const getAllNotes = async () => {
      dataDB.value = await db.getAllNotes();
    };

    const lengthData = computed(() => {
      return dataDB.value?.rows?.length;
    });

    const deleteRow = async (note) => {
      db.deleteNote(note);
      getAllNotes();
    };

    const open = (note) => {
      noteEdit.value = note;
      isVisibleModal.value = true;
      mode.value = 'view';
    };

    const edit = (note) => {
      noteEdit.value = note;
      isVisibleModal.value = true;
      mode.value = 'edit';
    };

    const create = () => {
      isVisibleModal.value = true;
      noteEdit.value = { text: '' };
      mode.value = 'edit';
    };

    const addNote = async (note) => {
      await db.addNotes(note.text);
      await getAllNotes();
    };

    const updateNote = async (note) => {
      await db.editNote(note);
      await getAllNotes();
    };

    const save = (note) => {
      if (!note?.id) {
        addNote(note);
      } else {
        updateNote(note);
      }
      isVisibleModal.value = false;
    };

    const isEdit = () => {
      return mode.value !== 'edit';
    };

    onMounted(() => {
      getAllNotes();
    });

    return {
      dataDB,
      mode,
      noteEdit,
      isVisibleModal,
      isEdit,
      lengthData,
      getAllNotes,
      deleteRow,
      open,
      edit,
      create,
      save,
    };
  },
};
</script>
