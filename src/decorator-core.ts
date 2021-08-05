export function classDecorator(params1, params2?: any) {
  return function (target: any) {
    console.log('类装饰器--->', target.prototype)
    // target.prototype.newFun = function () {
    //   console.log(this, 'newFun')
    // }

    // return class Test2 {
    //   constructor() {}
    //   static fullName: string
    //   age: number

    //   log(msg: string) {
    //     console.log(msg)
    //   }

    //   static getName() {}
    //   setName() {}
    // }
  }
}

export function staticMethodDecorator(target: any, name: string, descriptor: any) {
  console.log('静态方法装饰器--->', target, name, descriptor)
}

export function methodDecorator(target: any, name: string, descriptor: any) {
  console.log('方法装饰器--->', target, name, descriptor)
}

export function paramDecorator(target: any, paramName: string, paramIndex: number) {
  console.log('参数装饰器--->', target, paramName, paramIndex)
}

export function propDecorator(value: number) {
  return function (target: any, propName: string) {
    console.log('属性装饰器--->', target, propName)
    target[propName] = value
  }
}

export function staticPropDecorator(value: string) {
  return function (target: any, propName: string) {
    console.log('静态属性装饰器--->', target, propName)
    target[propName] = value
  }
}

export function accessorDecorator(value: string) {
  return function (target: any, name: string, descriptor: any) {
    console.log('访问器装饰器--->', target, name, descriptor)
  }
}

export function throttleDecorator(wait) {
  let prev = Date.now()
  return function (target: any, name: string, descriptor: any) {
    const func = descriptor.value
    if (typeof func === 'function') {
      descriptor.value = function (...args) {
        const now = Date.now()
        if (now - prev > wait) {
          func.apply(this, args)
          prev = Date.now()
        }
      }
    }
  }
}

export function debounceDecorator(wait) {
  let timer
  return function (target: any, name: string, descriptor: any) {
    const func = descriptor.value
    if (typeof func === 'function') {
      descriptor.value = function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, wait)
      }
    }
  }
}

export function readonlyDecorator(readOnly: boolean) {
  return function (target: any, propName: string) {
    Object.defineProperty(target, propName, {
      writable: !readOnly
    })
  }
}

export function reportLogDecorator() {
  return function (target: any, name: string, descriptor: any) {
    const func = descriptor.value
    if (typeof func === 'function') {
      descriptor.value = function (...arg: any[]) {
        func.apply(target, arg)
        try {
          // doLogReport
          console.log('doLogReport')
        } catch (error) {}
      }
    }
  }
}
