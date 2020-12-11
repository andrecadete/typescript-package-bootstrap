import { IpChecker } from '../../src/IpChecker/IpChecker';
import { HttpClient } from 'typed-rest-client/HttpClient';
import { IHttpClient } from 'typed-rest-client/Interfaces';
import * as netUtils from 'net';

const httpClient: IHttpClient = new HttpClient(undefined);
const ipChecker: IpChecker = new IpChecker(httpClient);

test('It returns a valid IP Address', () => {
    // You must return the promise or the test will conclude before the promise is resolved
    return ipChecker.check().then((ipAddress: string) => {
        // isIP() returns 4 (for ipv4), 6 (for ipv6) or 0 for non-matches
        expect([4, 6]).toContain(netUtils.isIP(ipAddress.trim()));
    });
});
