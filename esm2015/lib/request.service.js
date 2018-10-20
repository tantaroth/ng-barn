/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RequestService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @return {?}
     */
    get() {
        // this._request(this.store[key || this.key], key || this.key)
        // .subscribe(
        //   () => {
        //     this.store[key || this.key] = [
        //         { name: 'Zoe' },
        //         { name: 'Jey' },
        //         { name: 'Zoe' },
        //         { name: 'Jey' },
        //         { name: 'Zoe' },
        //         { name: 'Jey' },
        //         { name: 'Zoe' },
        //         { name: 'Jey' },
        //         { name: 'Zoe' },
        //         { name: 'Jey' },
        //         { name: 'Zoe' },
        //         { name: 'Jey' }
        //       ];
        //   }
        // );
    }
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    _request(data, key) {
        return from(data)
            .pipe(delay(5000));
        // const req = new HttpRequest('POST', '/upload/file', null, {
        //   reportProgress: true
        // });
        // this.http.request(req);
    }
}
RequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RequestService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ RequestService.ngInjectableDef = i0.defineInjectable({ factory: function RequestService_Factory() { return new RequestService(i0.inject(i1.HttpClient), i0.inject("config")); }, token: RequestService, providedIn: "root" });
if (false) {
    /** @type {?} */
    RequestService.prototype.http;
    /** @type {?} */
    RequestService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYmFybi8iLCJzb3VyY2VzIjpbImxpYi9yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFNLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBUWhELE1BQU07Ozs7O0lBRUosWUFDVSxJQUFnQixFQUNFLE1BQWM7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNFLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdEMsQ0FBQzs7OztJQUVMLEdBQUc7UUFDRCw4REFBOEQ7UUFDOUQsY0FBYztRQUNkLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLE1BQU07UUFDTixLQUFLO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLElBQWMsRUFBRSxHQUFZO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsOERBQThEO1FBQzlELHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sMEJBQTBCO0lBQzVCLENBQUM7OztZQXZDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRRLFVBQVU7NENBY2QsTUFBTSxTQUFDLFFBQVE7Ozs7O0lBRGhCLDhCQUF3Qjs7SUFDeEIsZ0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkgeyB9XG5cbiAgZ2V0KCkge1xuICAgIC8vIHRoaXMuX3JlcXVlc3QodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLCBrZXkgfHwgdGhpcy5rZXkpXG4gICAgLy8gLnN1YnNjcmliZShcbiAgICAvLyAgICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldID0gW1xuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9XG4gICAgLy8gICAgICAgXTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdChkYXRhOiBvYmplY3RbXSwga2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZyb20oZGF0YSlcbiAgICAucGlwZShkZWxheSg1MDAwKSk7XG4gICAgLy8gY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgJy91cGxvYWQvZmlsZScsIG51bGwsIHtcbiAgICAvLyAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcbiAgfVxuXG59XG4iXX0=