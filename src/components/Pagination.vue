<template>
	<section>
		Страницы:
		<ul>
			<li @click="onClick(currentPage - 1)">-</li>
			<li
				v-for="page in getPageNumber"
				:key="page"
				:class="{ active: currentPage === page }"
				@click="onClick(page)"
			>
				{{ page }}
			</li>
			<li @click="onClick(currentPage + 1)">+</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: "Pagination",
	props: {
		length: Number,
		currentPage: Number,
		countElementsOnPage: Number,
	},
	methods: {
		onClick(page) {
			//---* ПЕРЕДЕЛАТЬ * для того что бы юзер не ждал, нужно сначала сделать запрос а потом, пересчитывать страницы итд
			this.$emit("pagination", page);
		},
	},
	computed: {
		getPageNumber() {
			return Math.ceil(this.length / this.countElementsOnPage);
		},
	},
};
</script>

<style scoped>
ul {
	display: flex;
	list-style-type: none;
	gap: 5px;
	flex-wrap: wrap;
	justify-content: center;
}
.active {
	color: red;
}
</style>
