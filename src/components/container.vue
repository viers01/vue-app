<template>
	<div class="hello">
		<input type="number" v-model.number="first" />
		<input type="number" v-model.number="second" @input="checkInfinity" />
		<h2>Результат: {{ result || "введите числа" }}</h2>
		<button @click="calcutale('+')">+</button>
		<button @click="calcutale('-')">-</button>
		<button @click="calcutale('*')">*</button>
		<button @click="calcutale('/')" v-if="!second" disabled>/</button>
		<button @click="calcutale('/')" v-else>/</button>
		<button @click="calcutale('**')">Возвести в степень</button>
		<button @click="calcutale('%')">Целочисленное деление</button>
	</div>
</template>

<script>
export default {
	name: "container",
	props: {
		msg: String,
		myname: String,
	},
	data() {
		return {
			result: 0,
			first: 0,
			second: 0,
		};
	},
	methods: {
		calcutale(action = "+") {
			switch (action) {
				case "+":
					this.summ();
					break;
				case "-":
					this.subtract();
					break;
				case "*":
					this.multiply();
					break;
				case "/":
					this.devide();
					break;
				case "**":
					this.exponent();
					break;
				case "%":
					this.division();
					break;
			}
		},
		isEmpty() {
			this.second === 0 ? true : false;
		},
		summ() {
			this.result = this.first + this.second;
		},
		devide() {
			this.result = this.first / this.second;
		},
		subtract() {
			this.result = this.first - this.second;
		},
		multiply() {
			this.result = this.first * this.second;
		},
		division() {
			this.result = this.first % this.second;
		},
		exponent() {
			this.result = this.first ** this.second;
		},
	},
};
</script>

<style>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
