import assert from "assert";
import { SingletonRedisClient } from "./infra/redis/client";

const HOST = "";
const PORT = 0;
const KEY = "myKey";
const VALUE = "myValue";
const TTL = 1000;

async function main() {
    console.log("Instantiating first object");
    const firstInstance: SingletonRedisClient = SingletonRedisClient.getInstance(PORT, HOST);
    await firstInstance.connect();

    await firstInstance.save(KEY, VALUE, TTL);
    const response: string | null = await firstInstance.find(KEY);
    console.log(`Response from Redis: [${response}]`);

    console.log("Instantiating second object");
    const secondInstance: SingletonRedisClient = SingletonRedisClient.getInstance(PORT, HOST);
    await firstInstance.connect();

    try {
        assert.deepStrictEqual(firstInstance, secondInstance, "Different instances");
        console.log("Both instances are the same");
    } catch (error) {
        console.error(error.message);
    }

    /*
    Target: É a classe alvo, que só possuirá uma única instância gerada.
    Client: O cliente, que manipulará a instância.

    Target: É a classe SingletonRedisClient, que apesar de ser chamada duas vezes, gerou apenas
    uma instância.
    Client: Este arquivo.

    https://sbcode.net/typescript/singleton/#singleton-uml-diagram
    */
}

(async () => {
    await main();
})();
