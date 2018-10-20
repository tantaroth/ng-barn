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
var RequestService = /** @class */ (function () {
    function RequestService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @return {?}
     */
    RequestService.prototype.get = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    RequestService.prototype._request = /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (data, key) {
        return from(data)
            .pipe(delay(5000));
        // const req = new HttpRequest('POST', '/upload/file', null, {
        //   reportProgress: true
        // });
        // this.http.request(req);
    };
    RequestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    RequestService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ RequestService.ngInjectableDef = i0.defineInjectable({ factory: function RequestService_Factory() { return new RequestService(i0.inject(i1.HttpClient), i0.inject("config")); }, token: RequestService, providedIn: "root" });
    return RequestService;
}());
export { RequestService };
if (false) {
    /** @type {?} */
    RequestService.prototype.http;
    /** @type {?} */
    RequestService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYmFybi8iLCJzb3VyY2VzIjpbImxpYi9yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFNLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBS2hEO0lBS0Usd0JBQ1UsSUFBZ0IsRUFDRSxNQUFjO1FBRGhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDRSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RDLENBQUM7Ozs7SUFFTCw0QkFBRzs7O0lBQUg7UUFDRSw4REFBOEQ7UUFDOUQsY0FBYztRQUNkLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLE1BQU07UUFDTixLQUFLO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8saUNBQVE7Ozs7O0lBQWhCLFVBQWlCLElBQWMsRUFBRSxHQUFZO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsOERBQThEO1FBQzlELHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sMEJBQTBCO0lBQzVCLENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBVFEsVUFBVTtnREFjZCxNQUFNLFNBQUMsUUFBUTs7O3lCQWZwQjtDQWlEQyxBQXpDRCxJQXlDQztTQXRDWSxjQUFjOzs7SUFHdkIsOEJBQXdCOztJQUN4QixnQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL21vZGVscy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb25maWdcbiAgKSB7IH1cblxuICBnZXQoKSB7XG4gICAgLy8gdGhpcy5fcmVxdWVzdCh0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0sIGtleSB8fCB0aGlzLmtleSlcbiAgICAvLyAuc3Vic2NyaWJlKFxuICAgIC8vICAgKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBbXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdab2UnIH0sXG4gICAgLy8gICAgICAgICB7IG5hbWU6ICdKZXknIH1cbiAgICAvLyAgICAgICBdO1xuICAgIC8vICAgfVxuICAgIC8vICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXF1ZXN0KGRhdGE6IG9iamVjdFtdLCBrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnJvbShkYXRhKVxuICAgIC5waXBlKGRlbGF5KDUwMDApKTtcbiAgICAvLyBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCAnL3VwbG9hZC9maWxlJywgbnVsbCwge1xuICAgIC8vICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWVcbiAgICAvLyB9KTtcbiAgICAvLyB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuICB9XG5cbn1cbiJdfQ==