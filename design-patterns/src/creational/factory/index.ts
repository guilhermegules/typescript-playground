import { ConcreteCreator1, ConcreteCreator2 } from './concrete-creator';
import clientCode from "./client-code";

/**
 * The application picks a creator's type depending on the configuration or environment.
 */
console.log('App: Lauched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Lauched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());