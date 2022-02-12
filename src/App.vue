<template>
	<div id="app">
		<header>
			<AddForm />
		</header>
		<Pagination
			:length="this.$store.getters.getPaymentsList.length"
			@setPage="this.$store.commit('pageChoise', page)"
		/>
		<Dashboard :filteredItems="getFilteredItems" />
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
		return {};
	},
	methods: {
	},
	computed: {
		getListItems() {
			return this.$store.getters.getPaymentsList;
		},
		getFilteredItems() {
			return this.$store.getters.getFilteredItems;
		},
		getLenghtOfFilteredItems() {
			return this.$store.getters.getFilteredItems.length;
		},
	},
	mounted() {
		this.$store.dispatch('fetchData')
		// this.$store.commit("pageChoise", 1);
	},
	created(){
	}
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
