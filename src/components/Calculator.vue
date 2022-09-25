<template>
  <div class="calculator">
    <h1>{{ msg }}</h1>
    <input type="text" v-model.number="operand1">
    <h2>{{ result }}</h2>
    <input type="text" v-model.number="operand2">
    <button v-on:click="summ">+</button>
    <button v-on:click="minus">-</button>
    <button v-on:click="multiply">*</button>
    <button v-on:click="division">/</button>
    <button v-on:click="exponentiation">x^</button>
    <button v-on:click="integer">%</button>
  </div>
</template>

<script>
export default {
  name: 'CalculatorComponent',
  props: {
    msg: String
  },
  data() {
     return {
      result: 0,
      operand1: 0,
      operand2: 0,
     }
  },
  methods: {
    summ() {
      this.result = this.operand1 + this.operand2
    },
    minus() {
      this.result = this.operand1 - this.operand2
    },
    multiply() {
      this.result = this.operand1 * this.operand2
    },
    division() {
      this.result = this.operand1 / this.operand2
    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2
    },
    integer() {
      this.result = this.operand1 % this.operand2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
