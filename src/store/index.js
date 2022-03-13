import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		paymentsList: [],
	},
	mutations: {
		SET_DATA_TO_STATE(state, payload) {
			state.paymentsList = payload;
		},
	},
	actions: {
		GET_DATA_FROM_API({ commit }) {
			fetch("https://jsonplaceholder.typicode.com/todos/")
				.then((data) => data.json())
				.then((json) => commit("SET_DATA_TO_STATE", json))
		},
	},
	getters: {
		GET_PAYMENT_LIST: (state) => state.paymentsList,
		GET_TOTAL_PAYMENTS: (state) =>
			state.paymentsList.reduce((prev, curr) => prev + curr.value, 0),
	},
});
