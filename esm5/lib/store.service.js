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
        var frozenList = this.store[key || this.key];
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
        var frozenList = this.store[key || this.key];
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
        var frozenList = this.store[key || this.key];
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
        var frozenList = this.store[key || this.key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUluRDtJQVFFLHNCQUFzQyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUg1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHM0IsSUFDRSxNQUFNLENBQUMsS0FBSztZQUNaLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO1lBQ0EsSUFBSSxDQUFDLEtBQUssd0JBQVEsSUFBSSxDQUFDLEtBQUssRUFBSyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7O0lBRUQsMEJBQUc7OztJQUFIO1FBQ0UsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsNkJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBCQUFHOzs7O0lBQUgsVUFBSSxHQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsMEJBQUc7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsR0FBWTs7WUFD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RyxDQUFDO1FBRTlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUV2QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUU1QyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7WUFDdkMsS0FBSyxFQUFFLEtBQUs7WUFDWixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUU7WUFDMUMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN2QixJQUFJLEVBQUUsVUFBVTthQUNqQjtZQUNELFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQTdIRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQU1jLE1BQU0sU0FBQyxRQUFROzs7dUJBWjlCO0NBa0lDLEFBOUhELElBOEhDO1NBM0hZLFlBQVk7Ozs7OztJQUN2QiwyQkFBb0I7Ozs7O0lBQ3BCLDZCQUEyQjs7Ozs7SUFDM0IsK0JBQTZCOzs7OztJQUVqQiw4QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9tb2RlbHMvY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBrZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgb3B0aW9uczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChcImNvbmZpZ1wiKSBwcml2YXRlIGNvbmZpZzogQ29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgY29uZmlnLnN0b3JlICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnN0b3JlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3Qua2V5cyhjb25maWcuc3RvcmUpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMuc3RvcmUgPSB7IC4uLnRoaXMuc3RvcmUsIC4uLmNvbmZpZy5zdG9yZSB9O1xuICAgIH1cbiAgfVxuXG4gIGhvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdChrZXk6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXQoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHNldChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IGZyb3plbkxpc3QgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBkYXRhO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwicHJldmlvdXNcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHVzaChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IGZyb3plbkxpc3QgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ucHVzaChkYXRhKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmcm96ZW5MaXN0ID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuXG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldW2luZGV4XSA9IHtcbiAgICAgIC4uLnRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0sXG4gICAgICAuLi5kYXRhXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcImluZGV4XCIsIHtcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBkYXRhOiBmcm96ZW5MaXN0W2luZGV4XSxcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgZGVsZXRlKGluZGV4OiBudW1iZXIsIGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IGZyb3plbkxpc3QgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcImluZGV4XCIsIHtcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBkYXRhOiBmcm96ZW5MaXN0W2luZGV4XSxcbiAgICAgICAgbGlzdDogZnJvemVuTGlzdFxuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iXX0=