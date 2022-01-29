<template>
	<div id="app">
		<header>
			<AddForm v-on:addNewPayment="addPayment" />
		</header>
		<Pagination :length="items.length" @setPage="pageChoise" />
		<Dashboard :items="filtredItems" />
	</div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import Dashboard from "./components/Dashboard.vue";
import Pagination from "./components/Pagination.vue";
export default {
	name: "App",
	components: {
		Dashboard,
		AddForm,
		Pagination,
	},
	data: function () {
		return {
			items: [
				{ value: 25, category: "shop", id: 1 },
				{ value: 19, category: "cinema", id: 2 },
				{ value: 199, category: "food", id: 3 },
				{ value: 67, category: "food", id: 4 },
				{ value: 19, category: "shop", id: 5 },
				{ value: 79, category: "shop", id: 6 },
				{ value: 25, category: "shop", id: 7 },
				{ value: 25, category: "shop", id: 88 },
				{ value: 19, category: "cinema", id: 789 },
				{ value: 199, category: "food", id: 567 },
				{ value: 67, category: "food", id: 5637 },
				{ value: 19, category: "shop", id: 55 },
				{ value: 79, category: "shop", id: 656 },
				{ value: 25, category: "shop", id: 74646 },
				{ value: 25, category: "shop", id: 146 },
				{ value: 19, category: "cinema", id: 464642 },
				{ value: 199, category: "food", id: 34 },
				{ value: 67, category: "food", id: 446 },
				{ value: 19, category: "shop", id: 645 },
				{ value: 79, category: "shop", id: 646 },
				{ value: 25, category: "shop", id: 47 },
			],
			rangeElements: {
				start: Number,
				end: Number,
			},
			filtredItems: [],
		};
	},
	methods: {
		addPayment(data) {
			this.items = [...this.items, data];
			this.setPage();
		},
		//---Установили диапазон элементов
		pageChoise(page = 1) {
			this.rangeElements.start = page * 5 - 5;
			this.rangeElements.end = page * 5;
			this.setPage()
		},
		//---Сформировали массив элементов 
		setPage() {
			this.filtredItems = this.items.slice(
				this.rangeElements.start,
				this.rangeElements.end
			);
		},
	},
	mounted() {
		this.pageChoise();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
