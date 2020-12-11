import { IHttpClient, IHttpClientResponse } from "typed-rest-client/Interfaces";

export class IpChecker {

    private readonly httpClient: IHttpClient;

    public constructor(httpClient: IHttpClient) {
        this.httpClient = httpClient;
    }

    public check() {
        return this.httpClient.get('http://checkip.amazonaws.com/').then(
            (response: IHttpClientResponse) => {
                return response.readBody();
            }
        );
    }
}
