import { Config } from './models/config';
export declare class NgBarnService {
    private config;
    private key;
    private store;
    private options;
    constructor(config: Config);
    hot(): {
        key: string;
        store: object;
    };
    select(key: string, options?: object): void;
    get(key?: string): any;
    set(data: object, key?: string): any;
    push(data: object, key?: string): any;
    update(index: number, data: object, key?: string): any;
    delete(index: number, key?: string): any;
}
