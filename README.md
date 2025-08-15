# Typescript Design Patterns
Repository with examples of Design Patterns in Typescript

## Abstract Factory
It is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

It encapsulates the object creation process, allowing the client to create products that belong to the same family while keeping the specific implementation hidden.

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

## Decorator
The Decorator Pattern is a structural design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

It works by wrapping the original object in a decorator class that implements the same interface and can intercept, extend, or modify the original methods.

## Facade
It is a structural pattern that provides a simplified, unified interface to a set of more complex subsystems.
It hides the internal details and complexities of the system and offers clients a high-level, easy-to-use API.

Instead of interacting with multiple classes directly, the client only communicates with the facade, which delegates requests to the appropriate subsystems.

## Factory
The Factory Pattern defines an interface for creating objects, but allows subclasses or concrete factories to decide which class to instantiate.

It encapsulates the object creation logic, making the system more flexible and decoupled. This pattern is especially useful when the client code should not depend on how specific objects are constructed.

## Mediator
It is a behavioral design pattern that centralizes and orchestrates communication between different objects (called colleagues), preventing them from communicating directly with each other.

Instead of each object knowing and calling methods on other objects, they interact only with the mediator.
The mediator decides what to do and who to notify based on the messages it receives, reducing coupling and making interactions easier to manage and modify.

## Prototype
It is a creational design pattern that lets you create new objects by cloning existing ones, instead of instantiating them from scratch.

It is useful when object creation is costly (e.g., involves expensive database queries or complex initialization) and you want to duplicate it efficiently.

## Proxy
The Proxy Pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it.

It allows you to intercept, defer, enhance, or restrict access to the original object, while maintaining the same interface.

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

## Strategy
It is a behavioral design pattern that defines a family of algorithms, encapsulates each one in a separate class, and makes them interchangeable at runtime.

It allows the algorithm to vary independently from the clients that use it, promoting flexibility and reducing code duplication.

## Running :computer:
Use the **package.json** script

``` shell
npm run execute $1
```

Providing the file index.ts of the desired pattern. For example,

``` shell
npm run execute src/adapter/v1/index.ts
```
