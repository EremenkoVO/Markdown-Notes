<template>
  <div
    class="w-full flex justify-between items-center p-6 ft-montserrat-600 select-none fixed bg-white"
  >
    <h1>Your notes</h1>
    <h3 class="text-cornflower-blue-300">1</h3>
    <div class="border border-blue-light p-2 rounded rounded-full">
      <input type="search" />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="mr-2 text-blue-light"
      />
    </div>
  </div>

  <div>
    <ListView />
  </div>
</template>

<script>
import ListView from './components/ListView.vue';

export default {
  name: 'App',
  components: {
    ListView,
  },
};
</script>
