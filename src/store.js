import { createStore } from 'vuex';
import db from './db';

const store = createStore({
  state: {
    mode: '',

    note: {
      id: '',
      text: '',
    },

    allNote: [],
  },
  actions: {
    setStateMode({ state }, payload) {
      state.mode = payload;
    },

    setStateNote({ state }, payload) {
      state.note = payload;
    },

    setStateAllNotes({ state }, payload) {
      state.allNote = payload;
    },
  },
  mutations: {
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

    async getAllRecords({ commit }) {
      let notes = await db.getAllNotes();
      commit('setStateAllNotes', notes);
    },

    openNote({ commit }, payload) {
      commit('setStateMode', 'view');
      commit('setStateNote', payload.note);
    },

    updateNote({ commit }, payload) {},
  },
  getters: {
    getMode(state) {
      state.mode;
    },

    getNode(state) {
      state.node;
    },

    getAllNotes(state) {
      state.allNote;
    },
  },
});

export default store;
