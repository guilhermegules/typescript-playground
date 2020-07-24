// @Component
// @Selector
// @useState("params")

// function Logger(prefix: string) {
//   return (target: Function) => {
//     console.log(`${prefix} - ${target}`);
//   };
// } 

// function Log(target: Function) {
//   console.log(target);
// }

// @Logger('Awesome')
// class Foo {}

// Class decorator
function ApiVersion(version: string) {
  return (target: any) => {
    return class extends target {
      version = version;
    }
  }
}

@ApiVersion("1.0.0")
class Api { }

console.log(new Api());

// Property decorator

function minLength(length: number) {
  return (target: any, key: string | symbol) => {
    let value = target[key];

    const getter = () => value;

    const setter = (settedValue: string) => {
      if (settedValue.length < length) {
        console.log(`Error: value must be greater than ${length}`);
      } else {
        value = settedValue;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });

  }
}

class Movie {
  // validation: if has less than 3 - error
  @minLength(3)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
const movie = new Movie('Interstellar');
console.log(movie.title);

// Method decorator
function delay(ms: number) {
  return (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Waiting ${ms}`);
      setTimeout(() => {
        method.apply(this, args)
      }, ms)

      return descriptor;
    }
  }
}

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  // Wait a time then run a method
  @delay(2000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const guilherme = new Greeter('Guilherme');
guilherme.greet();