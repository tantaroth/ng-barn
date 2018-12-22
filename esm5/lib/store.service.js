/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from "@angular/core";
import * as i0 from "@angular/core";
var StoreService = /** @class */ (function () {
    function StoreService(config) {
        this.config = config;
        this.store = {};
        this.options = {};
        if (config.store &&
            typeof config.store === "object" &&
            Object.keys(config.store).length > 0) {
            this.store = tslib_1.__assign({}, this.store, config.store);
        }
    }
    /**
     * @return {?}
     */
    StoreService.prototype.hot = /**
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
    StoreService.prototype.select = /**
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
    StoreService.prototype.get = /**
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
    StoreService.prototype.set = /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (data, key) {
        /** @type {?} */
        var frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
        this.store[key || this.key] = data;
        /** @type {?} */
        var response = this.store[key || this.key];
        Object.defineProperty(response, "previous", {
            value: {
                list: frozenList
            },
            writable: false
        });
        return response;
    };
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    StoreService.prototype.push = /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (data, key) {
        /** @type {?} */
        var frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
        this.store[key || this.key].push(data);
        /** @type {?} */
        var index = this.store[key || this.key].length - 1;
        /** @type {?} */
        var response = this.store[key || this.key];
        Object.defineProperty(response, "index", {
            value: index,
            enumerable: true,
            writable: false
        });
        Object.defineProperty(response, "previous", {
            value: {
                data: frozenList[index],
                list: frozenList
            },
            writable: false
        });
        return response;
    };
    /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    StoreService.prototype.update = /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    function (index, data, key) {
        /** @type {?} */
        var frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
        this.store[key || this.key][index] = tslib_1.__assign({}, this.store[key || this.key][index], data);
        /** @type {?} */
        var response = this.store[key || this.key];
        Object.defineProperty(response, "index", {
            value: index,
            enumerable: true,
            writable: false
        });
        Object.defineProperty(response, "previous", {
            value: {
                data: frozenList[index],
                list: frozenList
            },
            writable: false
        });
        return response;
    };
    /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    StoreService.prototype.delete = /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    function (index, key) {
        /** @type {?} */
        var frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
        this.store[key || this.key].splice(index, 1);
        /** @type {?} */
        var response = this.store[key || this.key];
        Object.defineProperty(response, "index", {
            value: index,
            enumerable: true,
            writable: false
        });
        Object.defineProperty(response, "previous", {
            value: {
                data: frozenList[index],
                list: frozenList
            },
            writable: false
        });
        return response;
    };
    StoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    StoreService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ["config",] }] }
    ]; };
    /** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject("config")); }, token: StoreService, providedIn: "root" });
    return StoreService;
}());
export { StoreService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.key;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUluRDtJQVFFLHNCQUFzQyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUg1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHM0IsSUFDRSxNQUFNLENBQUMsS0FBSztZQUNaLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO1lBQ0EsSUFBSSxDQUFDLEtBQUssd0JBQVEsSUFBSSxDQUFDLEtBQUssRUFBSyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7O0lBRUQsMEJBQUc7OztJQUFIO1FBQ0UsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsNkJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBCQUFHOzs7O0lBQUgsVUFBSSxHQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsMEJBQUc7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsR0FBWTs7WUFD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bGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL21vZGVscy9jb25maWdcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuICBwcml2YXRlIGtleTogc3RyaW5nO1xuICBwcml2YXRlIHN0b3JlOiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBvcHRpb25zOiBvYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFwiY29uZmlnXCIpIHByaXZhdGUgY29uZmlnOiBDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuc3RvcmUgJiZcbiAgICAgIHR5cGVvZiBjb25maWcuc3RvcmUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9yZSkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zdG9yZSA9IHsgLi4udGhpcy5zdG9yZSwgLi4uY29uZmlnLnN0b3JlIH07XG4gICAgfVxuICB9XG5cbiAgaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0KGtleTogc3RyaW5nLCBvcHRpb25zPzogb2JqZWN0KSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldChrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgc2V0KGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldKSk7XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBkYXRhO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwicHJldmlvdXNcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHVzaChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IGZyb3plbkxpc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSkpO1xuXG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLnB1c2goZGF0YSk7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcImluZGV4XCIsIHtcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBkYXRhOiBmcm96ZW5MaXN0W2luZGV4XSxcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgdXBkYXRlKGluZGV4OiBudW1iZXIsIGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldKSk7XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdID0ge1xuICAgICAgLi4udGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldW2luZGV4XSxcbiAgICAgIC4uLmRhdGFcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBkZWxldGUoaW5kZXg6IG51bWJlciwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldKSk7XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcImluZGV4XCIsIHtcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBkYXRhOiBmcm96ZW5MaXN0W2luZGV4XSxcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iXX0=