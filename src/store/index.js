import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		paymentsList: [],
	},
	mutations: {
		SET_DATA_TO_STATE(state, {data}) {
			state.paymentsList = data.data;
		},
	},
	actions: {
		GET_DATA_FROM_API({ commit }) {
			fetch("http://test.uralmedias.ru/api/deals")
				.then((data) => data.json())
				.then((json) => commit("SET_DATA_TO_STATE", json))
		},
		ADD_PAYMENT_TO_DB({ commit }, payload) {
			fetch("http://test.uralmedias.ru/api/deals")
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
