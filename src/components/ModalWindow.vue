<template>
	<div class="b-overlay">
		<div class="b-modal">
			<div class="b-modal-header"></div>
			<div class="b-modal-content">
				<AddForm v-if="settings.content === 'AddForm'"/>
				<Auth v-if="settings.content === 'Auth'"/>
			</div>
			<div class="b-modal-footer">
				<button @click="closeHandler">Close modal</button>
			</div>
		</div>
	</div>
</template>

<script>
import AddForm from "./AddForm.vue";
import Auth from "./Auth.vue";

export default {
	name: "AddPaymentModal",
	props: {
		settings: {
			type: Object,
		},
	},
	components: {
		AddForm,
		Auth
	},
	data() {
		return {};
	},
	methods: {
		closeHandler() {
			this.$emit("close");
		},
	},
};
</script>

<style>
.b-overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(255, 255, 255, 0.8);
}
.b-modal {
	position: relative;
	top: 50%;
}
</style>
