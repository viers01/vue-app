<template>
	<div>
		<Pagination
			:length="GET_PAYMENT_LIST.length"
			:countElementsOnPage="countElementsOnPage"
			:currentPage="currentPage"
			@pagination="setPage"
		/>
		<Dashboard :paymentsList="setPaymentsRange" />
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
		};
	},
	components: {
		Dashboard,
		Pagination,
		
	},
	methods: {
		setPage(page) {
			this.currentPage = page;
		},
	},
	computed: {
		...mapGetters(["GET_PAYMENT_LIST", "GET_TOTAL_PAYMENTS"]),
		setPaymentsRange() {
			return this.GET_PAYMENT_LIST.slice(
				this.currPage * this.countElementsOnPage - this.countElementsOnPage,
				this.currPage * this.countElementsOnPage
			);
		},
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
