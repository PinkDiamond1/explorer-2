import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    mutations: {
        toggleLoader(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {},
});
