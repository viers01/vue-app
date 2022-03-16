<template>
	<div id="app">
		<header>
			<button @click="showModal = true">Добавить</button>
		</header>
		<ContentList />
		<ModalWindow
			:settings="settings"
			v-if="showModal"
			@close="showModal = false"
		/>
	</div>
</template>

<script>
import ContentList from "./components/ContentList.vue";
import ModalWindow from "./components/ModalWindow.vue";
import { mapActions } from "vuex";

export default {
	name: "App",
	components: {
		ContentList,
		ModalWindow,
	},
	data: function () {
		return {
			showModal: false,
			settings: {
				header: "Auth",
				content: "AddForm",
			},
		};
	},
	methods: {},
	computed: {
		...mapActions(["GET_DATA_FROM_API"]),
	},
	mounted() {
		this.GET_DATA_FROM_API;
	},
	created() {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
