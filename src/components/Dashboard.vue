<template>
	<section>
		Список трат:
		<SpendItem v-for="item of paymentsList" :key="item.id" :item="item" />
	</section>
</template>

<script>
import SpendItem from "./SpendItem.vue";
export default {
	name: "Dashboard",
	components: {
		SpendItem,
	},
	props: {
		paymentsList: {
			type: Array,
		},
	},
};
</script>

<style></style>
