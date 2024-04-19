import { mount } from '@vue/test-utils'
// import App from "@/App.vue";
import Calculator from "@/components/Calculator.vue";

describe('Calculator', () => {

  const wrapper = mount(Calculator)

  it('Отображаем разметку', () => {
    expect(wrapper.html()).toContain('<div class="calculator">')
  })

  it('Отрисовка поля ввода числа', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

  it('Отрисовка кнопки клавиатуры', () => {
    const button = wrapper.find('operand-elem')
    expect(button)
  })

  it('Присвоение значения переменной', () => {

    const operator1Input = wrapper.find('input[name=operand1]')
    operator1Input.setValue(10)
    const operator2Input = wrapper.find('input[name=operand2]')
    operator2Input.setValue(10)

    expect(wrapper.vm.operand1.value).toBe(10)
  })

  it('Тестирование кнопок цифр и присвоение значения переменной', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(0)

    const button2 = wrapper.find('button[name="9"]')
    button2.trigger('click')

    expect(wrapper.vm.operand1.value).toBe(9)
  })

  it('Тестирование операции сложения', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(10)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(10)

    const button = wrapper.find('button[name=summ')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(20)
  })

  it('Тестирование операции вычитания', () => {

    const operand1Input = wrapper.find('input[name=operand1')
    operand1Input.setValue(20)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(10)

    const button = wrapper.find('button[name=minus]')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(10)
  })

  it('Тестирование операции умножения', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(10)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(10)

    const button = wrapper.find('button[name=multyply]')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(100)
  })

  it('Тестирование операции деления', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(20)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(10)

    const button = wrapper.find('button[name=divide]')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  it('Тестирование операции возведения в степень', () => {
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(10)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(2)

    const button = wrapper.find('button[name=exponentiation]')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(100)
  })

  it('Тестирование операции деления по модулю', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(10)
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue(3)

    const button = wrapper.find('button[name=modulo]')
    button.trigger('click')

    expect(wrapper.vm.result).toBe(1)
  })

  it('Тестирование функции удаления', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(123)

    const button = wrapper.find('button[name=del]')
    button.trigger('click')

    expect(wrapper.vm.operand1.value).toBe(12)
  })

  it('Тестирование функции удаления при единичном числе', () => {

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(3)

    const button = wrapper.find('button[name=del]')
    button.trigger('click')

    expect(wrapper.vm.operand1.value).toBe(0)
  })

})