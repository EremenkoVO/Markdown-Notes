<template>
  <div class="w-min-6 w-max-8 h-full bg-red">
    <h3 class="text-medium">Список заметок</h3>
    <div v-if="isListNotes"></div>
    <div v-else class="text-center">Сейчас у вас нет заметок</div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
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
