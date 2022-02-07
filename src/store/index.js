import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
		setPaymentsListData(state, payload) {
			this.state.paymentsList = payload;
		},
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
	},
	actions: {},
	getters: {
		getPaymentsList: (state) => state.paymentsList,
		getFullPaymentsValue: (state) =>
			state.paymentsList.reduce((prev, curr) => prev + curr.value, 0),
		getFilteredItems: (state) => state.filtredItems,
	},
});
