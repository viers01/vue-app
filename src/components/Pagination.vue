<template>
	<section>
		Страницы:
		<ul>
			<li @click="onClick(currPage - 1)">-</li>
			<li
				v-for="page in getPageNumber"
				:key="page"
				:class="{ active: currPage == page }"
				@click="onClick(page)"
			>
				{{ page }}
			</li>
			<li @click="onClick(currPage + 1)">+</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: "Pagination",
	data() {
		return {
			countElements: 5,
		};
	},
	props: {
		length: Number,
		currPage: Number,
		n: Number,
	},
	render() {
		return {};
	},
	methods: {
		onClick(page) {
			this.$emit("pagination", page);
		},
	},
	computed: {
		getPageNumber() {
			return Math.ceil(this.length / this.n);
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
