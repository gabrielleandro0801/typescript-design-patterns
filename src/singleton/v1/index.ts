import assert from "assert";
import { SingletonRedisClient } from "./infra/redis/Client";

const HOST = "";
const PORT = 0;

async function main() {
    const firstInstance: SingletonRedisClient = SingletonRedisClient.getInstance(PORT, HOST);
    const secondInstance: SingletonRedisClient = SingletonRedisClient.getInstance(PORT, HOST);

    try {
        assert.deepStrictEqual(firstInstance, secondInstance, "Different instances");
        console.log("Both instances are the same");
    } catch (error) {
        console.error(error.message);
    }
}

(async () => {
    await main();
})();
