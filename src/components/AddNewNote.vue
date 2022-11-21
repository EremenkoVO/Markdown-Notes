<template>
  <div
    class="p-4 hw-new-card border-2 border-dashed border-cornflower-blue-300 bg-cornflower-blue-50 hover:bg-cornflower-blue-50a cursor-pointer transition ease-in-out delay-150 duration-300"
    @click="$emit('create')"
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
export default {
  name: 'AddNewNote',
  data() {
    return {};
  },
  methods: {
    /**
     * Событие открытие редактора создания новой заметки
     * @returns {void}
     */
    clickToCreate() {},
  },
};
</script>
