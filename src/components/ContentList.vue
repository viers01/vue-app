<template>
	<div>
		<Pagination
			:length="GET_PAYMENT_LIST.length"
			:n="n"
			:currPage="currPage"
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
			n: 10,
			currPage: 1,
		};
	},
	components: {
		Dashboard,
		Pagination,
		
	},
	methods: {
		setPage(page) {
			this.currPage = page;
		},
	},
	computed: {
		...mapGetters(["GET_PAYMENT_LIST", "GET_TOTAL_PAYMENTS"]),
		setPaymentsRange() {
			return this.GET_PAYMENT_LIST.slice(
				this.currPage * this.n - this.n,
				this.currPage * this.n
			);
		},
	},
};
</script>

<style>
header{
	border-bottom: 2px solid rgb(220, 220, 220);
}
</style>
