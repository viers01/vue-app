<template>
	<div class="hello">
		<input type="number" v-model.number="first" />
		<input type="number" v-model.number="second" @input="checkInfinity"/>
		<h2>Результат: {{ result || "введите числа" }}</h2>
		<button @click="summ">+</button>
		<button @click="subtract">-</button>
		<button @click="multiply(first, second)">*</button>
		<button @click="result = first / second" v-if="!second" disabled>
			/
		</button>
		<button @click="result = first / second" v-else>
			/
		</button>
		<button @click="result = first ** second">Возвести в степень</button>
		<button @click="result = first % second">Целочисленное деление</button>
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
		isEmpty(){
			this.second === 0? true: false
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
		multiply(first, second) {
			this.result = first * second;
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
