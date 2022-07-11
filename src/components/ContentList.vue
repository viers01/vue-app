<template>
	<div>
		<Pagination
			:length="GET_PAYMENT_LIST.length"
			:countElementsOnPage="countElementsOnPage"
			:currentPage="currentPage"
			@pagination="setPage"
		/>
		<Dashboard :paymentsList="elements" />
	</div>
</template>

<script>
// import AddForm from "./AddForm.vue";
import Dashboard from "./Dashboard.vue";
import Pagination from "./Pagination.vue";

import { mapGetters } from "vuex";
export default {
	name: "ContentList",
	data() {
		return {
			countElementsOnPage: 10,
			currentPage: 1,
			elements: null,
		};
	},
	components: {
		Dashboard,
		Pagination,
		
	},
	methods: {
		async setPage(page) {
			try {
				const response = await this.getPaymentsRange(page)
				
				if(list){
					this.elements = response
					this.currentPage = page;
				}
			} catch (e) {
			  console.log('Ошибка! ' + e);
			}
		},
		getPaymentsRange(page) {
			return this.GET_PAYMENT_LIST.slice(
				page * this.countElementsOnPage - this.countElementsOnPage,
				page * this.countElementsOnPage
			);
		},
	},
	computed: {
		...mapGetters(["GET_PAYMENT_LIST", "GET_TOTAL_PAYMENTS", "GET_DATA_FROM_API"]),
	},
	mounted() {
		this.GET_DATA_FROM_API;
	},
};
</script>

<style>
header{
	border-bottom: 2px solid rgb(220, 220, 220);
}
</style>
