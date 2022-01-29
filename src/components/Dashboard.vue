<template>
	<section>
		Список трат:
		<SpendItem v-for="item of items" :key="item.id" :item="item" />
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
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
