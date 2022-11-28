<template>
  <div>
    <div v-if="isEdit">
      <tabs>
        <tab name="Редактор">
          <textarea
            class="w-full outline-none p-2 border-2 rounded-md border-cornflower-blue-300 focus:border-cornflower-blue-500"
            rows="10"
            v-model="note.text"
          ></textarea>
          <div class="space-x-5 mb-4 ml-2 hidden">
            <button>
              <strong>B</strong>
            </button>
            <button>
              <em>I</em>
            </button>
          </div>
        </tab>
        <tab name="Предпросмотр">
          <div class="markdown-body mb-4">
            <Markdown :source="note.text" breaks html linkify />
          </div>
        </tab>
      </tabs>
    </div>
    <div v-else-if="isView">
      <div class="markdown-body mb-4">
        <Markdown :source="note.text" breaks html linkify />
      </div>
    </div>
    <menu>
      <button
        v-if="isEdit"
        class="p-2 font-medium text-white rounded-2xl transition-all bg-cornflower-blue-400 hover:bg-cornflower-blue-500"
        @click="save(note), $emit('close')"
      >
        Сохранить
      </button>
      <button
        v-if="isView"
        class="p-2 font-medium text-white rounded-2xl transition-all bg-cornflower-blue-400 hover:bg-cornflower-blue-500"
        @click="edit(note)"
      >
        Редактировать
      </button>
    </menu>
  </div>
</template>

<script>
import { computed } from 'vue';
import Markdown from 'vue3-markdown-it';
import { Tab, Tabs } from 'vue3-tabs-component';
import { useStore } from 'vuex';

export default {
  name: 'CardEditor',
  components: {
    Markdown,
    Tabs,
    Tab,
  },
  setup() {
    const store = useStore();

    const isEdit = computed(() => {
      return store.getters.getMode == 'edit';
    });

    const isView = computed(() => {
      return store.getters.getMode == 'view';
    });

    const note = computed(() => {
      return store.state.note;
    });

    const save = (note) => {
      if (note?.id == '') {
        store.dispatch('addNote', note.text);
      } else {
        store.dispatch('updateNote', note);
      }

      store.dispatch('getAllNotes');
    };

    const edit = (note) => {
      store.dispatch('setMode', 'edit');
      store.dispatch('setNote', note);
    };

    return {
      isEdit,
      isView,
      note,
      save,
      edit,
    };
  },
};
</script>
