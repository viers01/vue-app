<template>
	<section>
		<form>
			<label for="totalcost">
				Сколько потрачено
				<input
					type="number"
					v-model.number="value"
					id="totalcost"
					placeholder="Введите число"
				/>
				<br />
			</label>
			<label for="date">
				Введите дату
				<input
					type="date"
					v-model="date"
					id="date"
					placeholder="Введите дату"
				/>
			</label>
			<br />
			<label for="category">
				На что потрачено
				<input
					type="text"
					id="category"
					placeholder="Введите категорию"
					v-model="category"
				/>
			</label>
			<br />
			<button @click="addNewPayment" type="submit">ADD</button>
		</form>
	</section>
</template>

<script>
export default {
	name: "AddForm",
	data() {
		return {
			value: 0,
			category: "",
			date: "",
		};
	},
	methods: {
		addNewPayment(e) {
			e.preventDefault();
			const data = {
				value: this.value,
				category: this.category,
				date: this.date || this.currentDate,
				id: Date.now(),
			};
			this.$store.commit("addPayment", data);
			this.$store.commit("setPaymentsRange");

		},
	},
	computed: {
		currentDate() {
			const dateCurr = new Date();
			const d = dateCurr.getDay();
			const m = dateCurr.getMonth() + 1;
			const y = dateCurr.getFullYear();

			let date = new Date(y, m, d);
			let formatter1 = new Intl.DateTimeFormat("ru");
			return formatter1.format(date);
		},
	},
};
</script>

<style></style>
