<template>
	<section>
		Страницы:
		<ul>
			<a
				href=""
				v-for="page in this.getPageNumber()"
				:key="page"
				@click="sendPage"
				:data-page="page"
				>{{ page }}
			</a>
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
		length: {
			type: Number,
		},
	},
	render() {
		return {};
	},
	methods: {
		getPageNumber() {
			return Math.ceil(this.length / 5);
		},
		sendPage(e) {
			e.preventDefault();
			const currPage = e.target.getAttribute("data-page");
			this.$store.commit("pageChoise", currPage);
			this.$store.commit("setPaymentsRange");
		},
	},
	computed: {},
};
</script>

<style></style>
