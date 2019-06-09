/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import * as i0 from "@angular/core";
export class StoreService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.store = {};
        this.options = {};
        if (config.store &&
            typeof config.store === "object" &&
            Object.keys(config.store).length > 0) {
            this.store = Object.assign({}, this.store, config.store);
        }
    }
    /**
     * @return {?}
     */
    hot() {
        return {
            key: this.key,
            store: this.store
        };
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    select(key, options) {
        this.key = key;
        this.options = options;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    get(key) {
        return this.store[key || this.key];
    }
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    set(data, key) {
        /** @type {?} */
        const frozenList = this.store[key || this.key];
        this.store[key || this.key] = data;
        /** @type {?} */
        const response = this.store[key || this.key];
        Object.defineProperty(response, "previous", {
            value: {
                list: frozenList
            },
            writable: false
        });
        return response;
    }
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    push(data, key) {
        /** @type {?} */
        const frozenList = this.store[key || this.key];
        this.store[key || this.key].push(data);
        /** @type {?} */
        const index = this.store[key || this.key].length - 1;
        /** @type {?} */
        const response = this.store[key || this.key];
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
    }
    /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    update(index, data, key) {
        /** @type {?} */
        const frozenList = this.store[key || this.key];
        this.store[key || this.key][index] = Object.assign({}, this.store[key || this.key][index], data);
        /** @type {?} */
        const response = this.store[key || this.key];
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
    }
    /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    delete(index, key) {
        /** @type {?} */
        const frozenList = this.store[key || this.key];
        this.store[key || this.key].splice(index, 1);
        /** @type {?} */
        const response = this.store[key || this.key];
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
    }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ["config",] }] }
];
/** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject("config")); }, token: StoreService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU0sT0FBTyxZQUFZOzs7O0lBS3ZCLFlBQXNDLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDVDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUNFLE1BQU0sQ0FBQyxLQUFLO1lBQ1osT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVE7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEM7WUFDQSxJQUFJLENBQUMsS0FBSyxxQkFBUSxJQUFJLENBQUMsS0FBSyxFQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0QsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFnQjtRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQVk7O2NBQ3RCLFVBQVUsR0FBRyxJQUFJLENB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QyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUV2QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUU1QyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7WUFDdkMsS0FBSyxFQUFFLEtBQUs7WUFDWixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUU7WUFDMUMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN2QixJQUFJLEVBQUUsVUFBVTthQUNqQjtZQUNELFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQTdIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBTWMsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBSjVCLDJCQUFvQjs7Ozs7SUFDcEIsNkJBQTJCOzs7OztJQUMzQiwrQkFBNkI7Ozs7O0lBRWpCLDhCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL21vZGVscy9jb25maWdcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuICBwcml2YXRlIGtleTogc3RyaW5nO1xuICBwcml2YXRlIHN0b3JlOiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBvcHRpb25zOiBvYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFwiY29uZmlnXCIpIHByaXZhdGUgY29uZmlnOiBDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuc3RvcmUgJiZcbiAgICAgIHR5cGVvZiBjb25maWcuc3RvcmUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9yZSkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zdG9yZSA9IHsgLi4udGhpcy5zdG9yZSwgLi4uY29uZmlnLnN0b3JlIH07XG4gICAgfVxuICB9XG5cbiAgaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgc2VsZWN0KGtleTogc3RyaW5nLCBvcHRpb25zPzogb2JqZWN0KSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldChrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgc2V0KGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IGRhdGE7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwdXNoKGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5wdXNoKGRhdGEpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ubGVuZ3RoIC0gMTtcbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJpbmRleFwiLCB7XG4gICAgICB2YWx1ZTogaW5kZXgsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwicHJldmlvdXNcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZGF0YTogZnJvemVuTGlzdFtpbmRleF0sXG4gICAgICAgIGxpc3Q6IGZyb3plbkxpc3RcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHVwZGF0ZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IGZyb3plbkxpc3QgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdID0ge1xuICAgICAgLi4udGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldW2luZGV4XSxcbiAgICAgIC4uLmRhdGFcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBkZWxldGUoaW5kZXg6IG51bWJlciwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==