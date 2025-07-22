export class HttpTimeoutException extends Error {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export type HttpRequestOptions<B = null> = {
    url: string;
    headers?: any;
    params?: any;
    body?: B;
    timeoutInSeconds?: number;
};

export interface HttpResponse<R> {
    statusCode: number;
    body: R;
}

export interface IHttpClient {
    get<R>(options: HttpRequestOptions): Promise<HttpResponse<R>>;
    post<R>(options: HttpRequestOptions): Promise<HttpResponse<R>>;
    put<R>(options: HttpRequestOptions): Promise<HttpResponse<R>>;
    patch<R>(options: HttpRequestOptions): Promise<HttpResponse<R>>;
    delete<R>(options: HttpRequestOptions): Promise<HttpResponse<R>>;
}
