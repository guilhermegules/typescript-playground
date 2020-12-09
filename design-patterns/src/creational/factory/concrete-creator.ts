import { ConcreteProduct2, ConcreteProduct1 } from './concrete-product';
import { Creator } from "./creator";
import { Product } from "./product.interface";

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, event though the concrete product is actually returned from the 
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }

}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }

}
