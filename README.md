# Typescript Design Patterns
Repository with examples of Design Patterns in Typescript

## Adapter
It is the pattern used to set contracts through interfaces.

So, implementations of these interfaces remain encapsulated preventing coupling between modules.

## Builder
It is the pattern used to instantiate complex objects in different ways.

The instantiation of the complex object remain encapsulated inside the Builder.

## Command
It is the pattern that encapsulates a request as an object, allowing you to parameterize clients with operations, queue or log requests, and support undoable operations.

It decouples the object that invokes the operation (the invoker) from the one that knows how to perform it (the receiver).

The command object contains all the information needed to perform an action, including the method to call, the method’s arguments, and the receiver of the method.

## Factory
The Factory Pattern defines an interface for creating objects, but allows subclasses or concrete factories to decide which class to instantiate.

It encapsulates the object creation logic, making the system more flexible and decoupled. This pattern is especially useful when the client code should not depend on how specific objects are constructed.

## Result
It is the pattern used to avoid throwing **exceptions** in the code.

So, each method will return either an error or a success, where the client will decide how to handle the response.

## Singleton
It is the pattern used to prevent a class from being instantiated multiple times.

The class owns a [getInstance] method and turns its constructor into private.

Then, the clients will use this method to get the class instance.

## Specification
It is the pattern used to encapsulate, reuse and combine business rules and validations. It also reduces the usage of if/else throughout the code.

The Specification classes own a method named **isSatistiedBy** which validates the given input.

## Running :computer:
Run the **package.json** scripts.

For example,
``` shell
npm run result-v1
```
