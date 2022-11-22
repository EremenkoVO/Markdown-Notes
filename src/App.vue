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
    <ListView v-model:data="allNotes" @open="open" @close="close" />
  </div>

  <VueFinalModal
    v-model="visible"
    classes="modal-container"
    content-class="modal-content"
    @click-outside="close"
  >
    <CardEditor @close="close" />
  </VueFinalModal>
</template>

<script>
import { computed, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';
import { useStore } from 'vuex';
import CardEditor from './components/CardEditor.vue';
import ListView from './components/ListView.vue';

export default {
  name: 'App',
  components: {
    ListView,
    VueFinalModal,
    CardEditor,
  },
  setup() {
    const store = useStore();
    let visible = ref(false);

    store.dispatch('getAllNotes');

    const mode = computed(() => {
      return store.getters.getMode;
    });

    const lengthData = computed(() => {
      return store.getters.getLengthNotes;
    });

    const open = () => {
      visible.value = true;
    };

    const close = () => {
      visible.value = false;
      store.dispatch('setMode', '');
      store.dispatch('setNote', { id: '', text: '' });
    };

    return {
      visible,
      mode,
      lengthData,
      closed,
      open,
      close,
    };
  },
};
</script>
