## **TS装饰器**

装饰器（Decorator）是一种与类（class）相关的语法，用来修改类和类方法。

通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性或参数上来扩展类，方法，属性或参数的功能。

装饰器在编译阶段执行。

装饰器的写法：**普通装饰器（无法传参），装饰器工厂（可传参）**

```typescript
@classDecorator1
class TestClass {}

@classDecorator2('otherProp')
class TestClass {}

function classDecorator1(target:any){}

function classDecorator2(param:string){
    return function(target:any){
        target['testProp'] = param
    }
}

```

常见的装饰器有：**类装饰器，属性装饰器，方法装饰器，参数装饰器**

```typescript
@classDecorator
class Person {
  constructor() {}

  @staticPropDecorator static fullName: string
  @propDecorator age: number

  @staticMethodDecorator
  static getName() {}

  @methodDecorator
  setName(@paramDecorator name: string) {}
}

//类装饰器
function classDecorator(target:any){
    // target --> 类构造函数
}

//静态属性装饰器
function staticPropDecorator(target: any, name: string){
    // target --> 类构造函数
    // name --> 属性名
}

//属性装饰器
function propDecorator(target: any, name: string){
    // target --> 类的原型对象
    // name --> 属性名
}

//静态方法装饰器
function staticMethodDecorator(target: any, name: string, descriptor: any){
    // target --> 类构造函数
    // name --> 属性名
    // descriptor --> 属性描述符
}

//方法装饰器
function methodDecorator(target: any, name: string, descriptor: any){
    // target --> 类的原型对象
    // name --> 属性名
    // descriptor --> 属性描述符
}

//参数装饰器
function paramDecorator(target: any, paramName: string, paramIndex: number) {
    // target --> 类构造函数/类的原型对象,（取决于方法）
    // paramName --> 参数名
    // descriptor --> 参数在函数参数列表中的索引
}

```

注意：**target** 对于静态成员来说是**类构造函数**，对于实例成员来说是**类原型对象**。

**装饰器执行顺序**

属性装饰器-->[参数装饰器-->]方法装饰器-->静态成员装饰器(静态属性装饰器-->[参数装饰器-->]静态方法装饰器)-->类装饰器

**多个装饰器**

```typescript
class Test {
    
    @decoratorFn3
	@decoratorFn2
    @decoratorFn1
    propName: string
    
    getPropName(@paramDecorator1 a:string, @paramDecorator2 b:string, @paramDecorator3 c:string) {}
}
```









*[vuex-module-decorators](https://championswimmer.in/vuex-module-decorators/)*

