<template>
	<article>Потрачено: {{item.value}}, на {{item.category}}</article>
</template>

<script>
export default {
	name: "SpendItem",
	props: {
		item: {
			type: Object,
		},
	},
};
</script>

<style></style>
