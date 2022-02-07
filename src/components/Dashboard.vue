<template>
	<section>
		Список трат:
		<SpendItem v-for="item of filteredItems" :key="item.id" :item="item" />
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
		filteredItems: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
