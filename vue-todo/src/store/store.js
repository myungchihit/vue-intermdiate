import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from './getters';  // 속셩별 구조화 방법
// import * as mutations from './mutations';
import todoApp from './modules/todoApp';

Vue.use(Vuex);

// 속성별 구조화 했을때.
// export const store = new Vuex.Store({
//     state: {
//         todoItems: storage.fetch(),
//     },
//     getters,
//     mutations
// });

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});