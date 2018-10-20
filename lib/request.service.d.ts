import { HttpClient } from '@angular/common/http';
import { Config } from './models/config';
export declare class RequestService {
    private http;
    private config;
    constructor(http: HttpClient, config: Config);
    get(): void;
    private _request;
}
