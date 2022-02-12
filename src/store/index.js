import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const localDb = {
	page1: [
		{ id: 1, date: "20.03.2020", category: "Food", value: 169 },
		{ id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
		{ id: 3, date: "22.03.2020", category: "Sport", value: 450 },
	],
	page2: [
		{ id: 4, date: "23.03.2020", category: "Entertaiment", value: 969 },
		{ id: 5, date: "24.03.2020", category: "Education", value: 1500 },
		{ id: 6, date: "25.03.2020", category: "Food", value: 200 },
	],
	page3: [
		{ id: 7, date: "23.03.2020", category: "Entertaiment", value: 969 },
		{ id: 8, date: "24.03.2020", category: "Education", value: 1500 },
		{ id: 9, date: "25.03.2020", category: "Food", value: 200 },
	],
	page4: [
		{ id: 10, date: "23.03.2020", category: "Entertaiment", value: 969 },
		{ id: 11, date: "24.03.2020", category: "Education", value: 1500 },
		{ id: 12, date: "25.03.2020", category: "Food", value: 200 },
	],
	page5: [
		{ id: 13, date: "23.03.2020", category: "Entertaiment", value: 969 },
		{ id: 14, date: "24.03.2020", category: "Education", value: 1500 },
		{ id: 15, date: "25.03.2020", category: "Food", value: 200 },
	],
};
export default new Vuex.Store({
	state: {
		rangeElements: {
			start: Number,
			end: Number,
		},
		paymentsList: [],
		filtredItems: [],
	},
	mutations: {
		//----Добавляем в основной массив новый объект
		addPayment(state, newPayment) {
			this.state.paymentsList.unshift(newPayment);
		},
		//---Установили диапазон элементов
		pageChoise(state, page = 1) {
			this.state.rangeElements.start = page * 5 - 5;
			this.state.rangeElements.end = page * 5;
		},
		//---Сформировали массив элементов
		setPaymentsRange() {
			this.state.filtredItems = this.state.paymentsList.slice(
				this.state.rangeElements.start,
				this.state.rangeElements.end
			);
		},
		setPaymentsData(state, payload) {
			this.state.paymentsList = payload;
		},
	},
	actions: {
		fetchData({ commit }) {
			fetch("https://jsonplaceholder.typicode.com/todos/")
				.then((data) => data.json())
				.then((json) => commit("setPaymentsData", json))
				.then(() => commit("setPaymentsRange"));
		},
	},
	getters: {
		getPaymentsList: (state) => state.paymentsList,
		getFullPaymentsValue: (state) =>
			state.paymentsList.reduce((prev, curr) => prev + curr.value, 0),
		getFilteredItems: (state) => state.filtredItems,
	},
});
