# Typescript Design Patterns
Repository with examples of Design Patterns in Typescript

## Result
It is the pattern used to avoid throwing **exceptions** in the code.

So, each method will return either an error or a success, where the client will decide how to handle the response.

## Singleton
It is the pattern used to prevent a class from being instantiated multiple times.

The class owns a [getInstance] method and turns its constructor into private.

Then, the clients will use this method to get the class instance.

## Running :computer:
Run the **package.json** scripts.

For example,
``` shell
npm run result-v1
```
