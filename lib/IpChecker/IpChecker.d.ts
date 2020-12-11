import { IHttpClient } from "typed-rest-client/Interfaces";
export declare class IpChecker {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    check(): Promise<string>;
}
