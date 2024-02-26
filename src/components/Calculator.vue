<template>
  <div class="calculator">
    <h1>{{ msg }}</h1>
    <div>{{ checked == "operand1" ? "Введите первое число" : "Введите второе число число" }}</div>
    
    <input type="radio" name="operands_choise" value="operand1" v-model="checked">
    <input type="radio" name="operands_choise" value="operand2" v-model="checked">
    
    <input 
      type="text" 
      v-model.number="operand1.value">
    <input 
      type="text" 
      v-model.number="operand2.value">
    
    <h2 v-bind:class="{'error' : error}">{{ errorHandler }}</h2>

    <input 
      type="checkbox" 
      id="operands_show"
      v-model="isHidden">
    <label for="operands_show">Показать клавиатуру</label>

    <div class="operands" v-show="isHidden">
      <button class="operand-elem"
        v-for="elem in operands" 
        v-bind:key="elem.id"
        v-on:click="numberHandler(elem, checked)">
        {{ elem.name }}
      </button>
    </div>
    
    <div class="operations">
      <button class="operation-elem"
        v-for="elem in operations" 
        v-bind:key="elem.id" 
        v-on:click="methodHandler(elem.id)">
        {{ elem.name.toUpperCase() }}
      </button>
    </div>

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
      checked: "operand1",
      isHidden: true,
      error: false,
      result: 0,
      operand1: {
        name: "Первый",
        flag: true,
        value: 0,
      },
      operand2: {
        name: "Второй",
        flag: false,
        value: 0,
      },
      operations: [
        {
          name: 'summ',
          id: '+'
        },
        {
          name: 'minus',
          id: '-'
        },
        {
          name: 'multyply',
          id: '*'
        },
        {
          name: 'divide',
          id: '/'
        },
        {
          name: 'exponentiation',
          id: '**'
        },
        {
          name: 'modulo',
          id: '%'
        },
        {
          name: 'del',
          id: '<-'
        },
      ],
      operands: [
        {
          name: "0",
          id: "0",
        },
        {
          name: "1",
          id: "1",
        },
        {
          name: "2",
          id: "2",
        },
        {
          name: "3",
          id: "3",
        },
        {
          name: "4",
          id: "4",
        },
        {
          name: "5",
          id: "5",
        },
        {
          name: "6",
          id: "6",
        },
        {
          name: "7",
          id: "7",
        },
        {
          name: "8",
          id: "8",
        },
        {
          name: "9",
          id: "9",
        },
      ]
     }
  },
  computed: {
    errorHandler: function() {
      return  this.error ? "ERROR" : this.result 
    }
  },
  methods: {
    methodHandler(key) {
      this.error = false;
      switch (key) {
        case '+':
          this.result = this.operand1.value + this.operand2.value
          break;
        case '-':
          this.result = this.operand1.value - this.operand2.value
          break;
        case '*':
          this.result = this.operand1.value * this.operand2.value
          break;
        case '/':
          if (this.operand2.value !== 0) {
            this.result = this.operand1.value / this.operand2.value
          } else {
            this.error = true
          }
          break;
        case '**':
          this.result = this.operand1.value ** this.operand2.value
          break;
        case '%':
          this.result = this.operand1.value % this.operand2.value
          break;
        case '<-':
          if (this.checked === "operand1") {
            this.deleteHandler(this.operand1)
          } else {
            this.deleteHandler(this.operand2)
          }
          break;

        default:
          break;
      }
    },
    numberHandler(e, operand) {
      if (operand === "operand1") {
        this.operand1.value = parseInt(this.operand1.value += e.name)
      } else {
        this.operand2.value = parseInt(this.operand2.value += e.name)
      }
    },
    deleteHandler(e) {
      if (e.value
          .toString().length === 1) {
        e.value = 0
      } else {
        e.value = parseInt(
            e.value
                .toString()
                .substring(0, e.value.toString().length - 1)
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/Calculator.scss';
</style>
