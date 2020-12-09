## Creational Patterns

### Factory

Simple patter then helps when we need multiple objects when the basically same implementation (using the same interface for example)

#### Pros

- You avoid tight coupling between the creator and the concrete products;
- _Single Responsibility Principle_. You can move the product creation code into one place in the program, making the code easier to support;
- _Open/Closed Principle_. You can introduce new types of products into the program without breaking existing client code.

#### Cons

- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you're introducing the pattern into an existing hierarchy of creator classes.
