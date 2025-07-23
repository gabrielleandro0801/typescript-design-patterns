import Redis from "ioredis";

/**
 * Essa classe permite apenas uma única instanciação, pois seu construtor é privado
 * e sua construção só é possível através do método estático "getInstance".
 */
export class SingletonRedisClient {
    /**
     * Através do atributo estático "instance", a única instância da classe é persistida
     * e reutilizada quando o método estático "getInstance" é invocado.
     */
    private static instance: SingletonRedisClient;
    private readonly connection: Redis;

    private constructor(port: number, host: string) {
        this.connection = new Redis(port, host, {
            lazyConnect: true,
            enableAutoPipelining: true,
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
