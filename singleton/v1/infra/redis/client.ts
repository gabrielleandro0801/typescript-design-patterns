import Redis from "ioredis";

export class SingletonRedisClient {
    private static instance: SingletonRedisClient;
    private readonly connection: Redis;

    private constructor(port: number, host: string) {
        this.connection = new Redis(port, host, {
            lazyConnect: true,
            enableAutoPipelining: true
        });
    }

    static getInstance(port: number, host: string): SingletonRedisClient {
        if (!SingletonRedisClient.instance) {
            SingletonRedisClient.instance = new SingletonRedisClient(port, host);
        }
        return SingletonRedisClient.instance;
    }

    async connect(): Promise<void> {
        await this.connection.connect();
    }

    async save(key: string, value: string, ttl: number): Promise<void> {
        await this.connection.set(key, value, "EX", ttl);
    }

    async find(key: string): Promise<string | null> {
        return await this.connection.get(key);
    }

}
