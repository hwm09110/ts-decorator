import {
  classDecorator,
  propDecorator,
  staticPropDecorator,
  staticMethodDecorator,
  methodDecorator,
  paramDecorator,
  accessorDecorator,
  throttleDecorator,
  debounceDecorator,
  readonlyDecorator,
  reportLogDecorator
} from './decorator-core'

@classDecorator(1)
class Test {
  constructor() {}

  @readonlyDecorator(true)
  @propDecorator(25)
  age: number

  @staticPropDecorator('abc')
  static fullName: string

  @accessorDecorator('12')
  get x() {
    return 'xxx'
  }

  // @throttleDecorator(1000)
  @debounceDecorator(1000)
  @staticMethodDecorator
  static getName() {
    console.log('execute getName')
  }

  @reportLogDecorator()
  @methodDecorator
  setName(@paramDecorator id: string) {
    console.log('setName action', id)
  }
}

const TestInstance = new Test()
window['myTestInstance'] = TestInstance
console.log('TestInstance----------->', TestInstance)

window.onload = function () {
  const EActionBtn = document.querySelector('#action-btn')

  EActionBtn.addEventListener('click', () => {
    // Test.getName()
    TestInstance.setName('test')
  })

  window.addEventListener('scroll', () => {
    Test.getName()
  })
}
