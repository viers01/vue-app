<template>
	<div>
		<div class="b-modal-header">Add new payment</div>
		<div class="b-modal-content"><AddForm /></div>
		<div class="b-modal-footer">
            <button @click="closeHandler" v-show="isVisible">Close modal</button>
        </div>
	</div>
</template>

<script>
import AddForm from "./AddForm.vue";

export default {
	name: "AddPaymentModal",
	components: {
		AddForm,
	},
	data() {
		return {
        };
	},
    methods:{
        closeHandler(){
            this.$emit('close');
        }
    }
};
</script>

<style lang="scss"></style>
