import { HttpRequestOptions, HttpResponse, HttpTimeoutException, IHttpClient } from "./IHttpClient";

const DEFAULT_HTTP_TIMEOUT_IN_SECONDS: number = 10;

export class Fetch implements IHttpClient {
    async get<R>(options: HttpRequestOptions): Promise<HttpResponse<R>> {
        const { url, headers, params, timeoutInSeconds }: HttpRequestOptions = options;
        const queryString = params ? `?${new URLSearchParams(params).toString()}` : "";

        return await this.send<R>("GET", {
            url: `${url}${queryString}`,
            headers,
            timeoutInSeconds,
        });
    }

    async post<R>(options: HttpRequestOptions): Promise<HttpResponse<R>> {
        const { url, headers, body, timeoutInSeconds }: HttpRequestOptions = options;

        return await this.send("POST", {
            url,
            headers,
            body,
            timeoutInSeconds,
        });
    }

    async put<R>(options: HttpRequestOptions): Promise<HttpResponse<R>> {
        const { url, headers, body, timeoutInSeconds }: HttpRequestOptions = options;

        return await this.send("PUT", {
            url,
            headers,
            body,
            timeoutInSeconds,
        });
    }

    async patch<R>(options: HttpRequestOptions): Promise<HttpResponse<R>> {
        const { url, headers, body, timeoutInSeconds }: HttpRequestOptions = options;

        return await this.send("PATCH", {
            url,
            headers,
            body,
            timeoutInSeconds,
        });
    }

    async delete<R>(options: HttpRequestOptions): Promise<HttpResponse<R>> {
        const { url, headers, body, timeoutInSeconds }: HttpRequestOptions = options;

        return await this.send("DELETE", {
            url,
            headers,
            body,
            timeoutInSeconds,
        });
    }

    private async send<R>(method: string, options: HttpRequestOptions): Promise<HttpResponse<R>> {
        try {
            const { url, headers, body }: HttpRequestOptions = options;
            const response = await fetch(url, {
                method,
                headers,
                body: this.prepareRequestBody(body),
                signal: AbortSignal.timeout((options.timeoutInSeconds || DEFAULT_HTTP_TIMEOUT_IN_SECONDS) * 1000),
            });

            return {
                statusCode: response.status,
                body: await this.getResponseBody(response),
            };
        } catch (error) {
            if (error?.name === "AbortError") {
                throw new HttpTimeoutException(`${method} - ${options.url}`);
            }

            throw error;
        }
    }

    private prepareRequestBody(body: any) {
        return body ? JSON.stringify(body) : body;
    }

    private async getResponseBody(response: any) {
        try {
            return await response.json();
        } catch {
            return {};
        }
    }
}
