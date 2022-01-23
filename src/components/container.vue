<template>
	<div class="hello">
		<input
			type="number"
			name="first"
			v-model.number="first"
			@focus="onfocus"
		/>
		<input
			type="number"
			name="second"
			v-model.number="second"
			@focus="onfocus"
		/>
		<div>
			<input
				type="radio"
				value="first"
				name="first"
				id="first"
				v-model="picked"
			/>
			<input
				type="radio"
				value="second"
				name="second"
				id="second"
				v-model="picked"
			/>
		</div>
		<h2>Результат: {{ result || "введите числа" }}</h2>

		<button
			v-for="(operation, index) in operations"
			:key="index"
			@click="calcutale(operation)"
		>
			{{ operation }}
		</button>
		<div>
			<input
				type="checkbox"
				name="keyboard"
				id="keyboard"
				@input="isVisible = !isVisible"
			/>
			<label for="keyboard">Показать клавиатуру</label>
		</div>
		<div v-show="isVisible">
			<button
				v-for="n in 10"
				:key="n - 1"
				:value="n - 1"
				@click="inputNumber"
			>
				{{ n - 1 }}
			</button>
			<button @click="removeLast">Delete</button>
		</div>
		<div v-for="(log, index) in logs" :key="index">{{ log }}</div>
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
			result: "",
			first: 0,
			second: 0,
			operations: ["+", "-", "%", "/", "*", "**"],
			logs: {},
			picked: "",
			isVisible: false,
		};
	},
	methods: {
		removeLast() {
			this[this.picked] = this[this.picked].slice(0, -1);
		},
		inputNumber(event) {
			this[this.picked] += event.target.value;
		},
		fib(n) {
			return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
		},
		onfocus(event) {
			this.picked = event.target.name;
		},
		calcutale(action = "+") {
			this.inputsToNumber()
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
			// this.logs[Date.now()] = `${this.first} ${action} ${this.second} = ${this.result}`;
			this.$set(
				this.logs,
				Date.now(),
				`${this.first} ${action} ${this.second} = ${this.result}`
			);
		},
		isEmpty() {
			this.second === 0 ? true : false;
		},
		inputsToNumber() {
			this.first = Number(this.first);
			this.second = Number(this.second);
		},
		summ() {
			this.result = +this.first + +this.second;
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
