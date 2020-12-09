import { Product } from './product.interface';

/**
 * Concrete Products provide various implementations of the Product interface.
 */
export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

export class ConcreteProduct2 implements Product {
  operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}