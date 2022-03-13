<template>
	<div id="app">
		<ContentList/>
	</div>
</template>

<script>
import ContentList from "./components/ContentList.vue";
import {mapActions} from "vuex";

export default {
	name: "App",
	components: {
		ContentList
	},
	data: function () {
		return {};
	},
	methods: {
	},
	computed: {
		...mapActions(["GET_DATA_FROM_API"])
	},
	mounted() {
		this.GET_DATA_FROM_API;
	},
	created(){
	}
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
