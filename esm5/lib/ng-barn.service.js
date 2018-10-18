/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var NgBarnService = /** @class */ (function () {
    function NgBarnService(config) {
        this.config = config;
        this.store = {};
        this.options = {};
        if (config.store &&
            typeof config.store === 'object' &&
            Object.keys(config.store).length > 0) {
            this.store = tslib_1.__assign({}, this.store, config.store);
        }
    }
    /**
     * @return {?}
     */
    NgBarnService.prototype.hot = /**
     * @return {?}
     */
    function () {
        return {
            key: this.key,
            store: this.store
        };
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    NgBarnService.prototype.select = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        this.key = key;
        this.options = options;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    NgBarnService.prototype.get = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        return this.store[key || this.key];
    };
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    NgBarnService.prototype.set = /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (data, key) {
        this.store[key || this.key] = data;
        return this.store[key || this.key];
    };
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    NgBarnService.prototype.push = /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (data, key) {
        this.store[key || this.key].push(data);
        return this.store[key || this.key];
    };
    /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    NgBarnService.prototype.update = /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (index, data, key) {
        this.store[key || this.key][index] = tslib_1.__assign({}, this.store[key || this.key][index], data);
        return this.store[key || this.key];
    };
    /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    NgBarnService.prototype.delete = /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    function (index, key) {
        this.store[key || this.key].splice(index, 1);
        return this.store[key || this.key];
    };
    NgBarnService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgBarnService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ NgBarnService.ngInjectableDef = i0.defineInjectable({ factory: function NgBarnService_Factory() { return new NgBarnService(i0.inject("config")); }, token: NgBarnService, providedIn: "root" });
    return NgBarnService;
}());
export { NgBarnService };
if (false) {
    /** @type {?} */
    NgBarnService.prototype.key;
    /** @type {?} */
    NgBarnService.prototype.store;
    /** @type {?} */
    NgBarnService.prototype.options;
    /** @type {?} */
    NgBarnService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYmFybi8iLCJzb3VyY2VzIjpbImxpYi9uZy1iYXJuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJbkQ7SUFTRSx1QkFDNEIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBSzNCLElBQ0UsTUFBTSxDQUFDLEtBQUs7WUFDWixPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQztZQUNBLElBQUksQ0FBQyxLQUFLLHdCQUFRLElBQUksQ0FBQyxLQUFLLEVBQUssTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUVELDJCQUFHOzs7SUFBSDtRQUNFLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDhCQUFNOzs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwyQkFBRzs7OztJQUFILFVBQUksR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELDJCQUFHOzs7OztJQUFILFVBQUksSUFBWSxFQUFFLEdBQVk7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCw0QkFBSTs7Ozs7SUFBSixVQUFLLElBQVksRUFBRSxHQUFZO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVELDhCQUFNOzs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFZLEVBQUUsR0FBWTtRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBSyxJQUFJLENBQUMsQ0FBQztRQUV2RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCw4QkFBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxHQUFZO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQTNERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0RBUUksTUFBTSxTQUFDLFFBQVE7Ozt3QkFkcEI7Q0FpRUMsQUE3REQsSUE2REM7U0ExRFksYUFBYTs7O0lBRXhCLDRCQUFvQjs7SUFDcEIsOEJBQTJCOztJQUMzQixnQ0FBNkI7O0lBRzNCLCtCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL21vZGVscy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5TZXJ2aWNlIHtcblxuICBwcml2YXRlIGtleTogc3RyaW5nO1xuICBwcml2YXRlIHN0b3JlOiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBvcHRpb25zOiBvYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge1xuICAgIGlmIChcbiAgICAgIGNvbmZpZy5zdG9yZSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5zdG9yZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9yZSkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zdG9yZSA9IHsgLi4udGhpcy5zdG9yZSwgLi4uY29uZmlnLnN0b3JlIH07XG4gICAgfVxuICB9XG5cbiAgaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0KGtleTogc3RyaW5nLCBvcHRpb25zPzogb2JqZWN0KSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldChrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgc2V0KGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldID0gZGF0YTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBwdXNoKGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLnB1c2goZGF0YSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgdXBkYXRlKGluZGV4OiBudW1iZXIsIGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldW2luZGV4XSA9IHsgLi4udGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldW2luZGV4XSwgLi4uZGF0YX07XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgZGVsZXRlKGluZGV4OiBudW1iZXIsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG59XG4iXX0=