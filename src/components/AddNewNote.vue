<template>
  <div
    class="p-4 hw-new-card border-2 border-dashed border-cornflower-blue-300 bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
    @click="createNote(), $emit('open')"
  >
    <div>
      <font-awesome-icon
        icon="fa-solid fa-plus"
        class="fa-2xl text-cornflower-blue-300"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'AddNewNote',
  setup() {
    const store = useStore();

    const createNote = () => {
      store.dispatch('setMode', 'edit');
    };

    return {
      createNote,
    };
  },
};
</script>
