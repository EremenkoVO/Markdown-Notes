import { createStore } from 'vuex';
import db from './db';

const store = createStore({
  state() {
    return {
      visible: false,

      mode: '',

      note: {
        id: '',
        text: '',
      },

      allNotes: [],
    };
  },
  mutations: {
    setStateMode(state, payload) {
      state.mode = payload;
    },

    setStateNote(state, payload) {
      state.note = payload;
    },

    setStateAllNotes(state, payload) {
      state.allNotes = payload;
    },

    setStateVisible(state, payload) {
      state.visible = payload;
    },
  },
  actions: {
    setMode({ commit }, payload) {
      commit('setStateMode', payload);
    },

    setVisible({ commit }, payload) {
      commit('setStateVisible', payload);
    },

    setNote({ commit }, payload) {
      commit('setStateNote', payload);
    },

    editNote({ commit }, payload) {
      commit('setStateMode', 'edit');
      commit('setStateNode', payload?.note);
    },

    viewNote({ commit }, payload) {
      commit('setStateMode', 'view');
      commit('setStateNote', payload?.note);
    },

    openNote({ commit }, payload) {
      commit('setStateMode', 'view');
      commit('setStateNote', payload.note);
    },

    async getAllNotes({ commit }) {
      let notes = await db.getAllNotes();
      commit('setStateAllNotes', notes);
    },

    async updateNote(payload) {
      await db.editNote(payload);
    },

    // eslint-disable-next-line no-unused-vars
    async addNote({ commit }, payload) {
      await db.addNotes(payload);
    },

    // eslint-disable-next-line no-unused-vars
    async deleteNote({ commit }, payload) {
      await db.deleteNote(payload);
    },
  },
  getters: {
    getMode(state) {
      return state.mode;
    },

    getVisible(state) {
      return state.visible;
    },

    getNode(state) {
      return state.node;
    },

    getAllNotes(state) {
      return state.allNotes;
    },

    getLengthNotes(state) {
      return state.allNotes?.rows?.length || 0;
    },
  },
});

export default store;
