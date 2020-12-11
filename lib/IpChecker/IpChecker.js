"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpChecker = void 0;
class IpChecker {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    check() {
        return this.httpClient.get('http://checkip.amazonaws.com/').then((response) => {
            return response.readBody();
        });
    }
}
exports.IpChecker = IpChecker;
