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
        const frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
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
        const frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
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
        const frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
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
        const frozenList = JSON.parse(JSON.stringify(this.store[key || this.key]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU0sT0FBTyxZQUFZOzs7O0lBS3ZCLFlBQXNDLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDVDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUNFLE1BQU0sQ0FBQyxLQUFLO1lBQ1osT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVE7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEM7WUFDQSxJQUFJLENBQUMsS0FBSyxxQkFBUSxJQUFJLENBQUMsS0FBSyxFQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0QsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFnQjtRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQVk7O2NBQ3RCLFVBQVUsR0FBRyxJQUFJLENB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QUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLEdBQVk7O2NBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2NBRXZDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtZQUN2QyxLQUFLLEVBQUUsS0FBSztZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRTtZQUMxQyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0QsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBN0hGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FNYyxNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFKNUIsMkJBQW9COzs7OztJQUNwQiw2QkFBMkI7Ozs7O0lBQzNCLCtCQUE2Qjs7Ozs7SUFFakIsOEJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vbW9kZWxzL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlU2VydmljZSB7XG4gIHByaXZhdGUga2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgc3RvcmU6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoXCJjb25maWdcIikgcHJpdmF0ZSBjb25maWc6IENvbmZpZykge1xuICAgIGlmIChcbiAgICAgIGNvbmZpZy5zdG9yZSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5zdG9yZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JlKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5jb25maWcuc3RvcmUgfTtcbiAgICB9XG4gIH1cblxuICBob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgIH07XG4gIH1cblxuICBzZWxlY3Qoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0KGtleT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBzZXQoZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmcm96ZW5MaXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0pKTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IGRhdGE7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJwcmV2aW91c1wiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwdXNoKGRhdGE6IG9iamVjdCwga2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgZnJvemVuTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldKSk7XG5cbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ucHVzaChkYXRhKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmcm96ZW5MaXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0pKTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0gPSB7XG4gICAgICAuLi50aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdLFxuICAgICAgLi4uZGF0YVxuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgXCJpbmRleFwiLCB7XG4gICAgICB2YWx1ZTogaW5kZXgsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwicHJldmlvdXNcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZGF0YTogZnJvemVuTGlzdFtpbmRleF0sXG4gICAgICAgIGxpc3Q6IGZyb3plbkxpc3RcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGRlbGV0ZShpbmRleDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmcm96ZW5MaXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0pKTtcblxuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsIFwiaW5kZXhcIiwge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCBcInByZXZpb3VzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRhdGE6IGZyb3plbkxpc3RbaW5kZXhdLFxuICAgICAgICBsaXN0OiBmcm96ZW5MaXN0XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==