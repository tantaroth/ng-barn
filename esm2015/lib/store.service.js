/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
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
            typeof config.store === 'object' &&
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
        this.store[key || this.key] = data;
        return this.store[key || this.key];
    }
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    push(data, key) {
        this.store[key || this.key].push(data);
        return this.store[key || this.key];
    }
    /**
     * @param {?} index
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    update(index, data, key) {
        this.store[key || this.key][index] = Object.assign({}, this.store[key || this.key][index], data);
        return this.store[key || this.key];
    }
    /**
     * @param {?} index
     * @param {?=} key
     * @return {?}
     */
    delete(index, key) {
        this.store[key || this.key].splice(index, 1);
        return this.store[key || this.key];
    }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
StoreService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject("config")); }, token: StoreService, providedIn: "root" });
if (false) {
    /** @type {?} */
    StoreService.prototype.key;
    /** @type {?} */
    StoreService.prototype.store;
    /** @type {?} */
    StoreService.prototype.options;
    /** @type {?} */
    StoreService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU07Ozs7SUFNSixZQUM0QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpsQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFLM0IsSUFDRSxNQUFNLENBQUMsS0FBSztZQUNaLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO1lBQ0EsSUFBSSxDQUFDLEtBQUsscUJBQVEsSUFBSSxDQUFDLEtBQUssRUFBSyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7O0lBRUQsR0FBRztRQUNELE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxHQUFXLEVBQUUsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxHQUFZO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxHQUFZO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEdBQVk7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUssSUFBSSxDQUFDLENBQUM7UUFFdkYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWEsRUFBRSxHQUFZO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQTNERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FRSSxNQUFNLFNBQUMsUUFBUTs7Ozs7SUFMbEIsMkJBQW9COztJQUNwQiw2QkFBMkI7O0lBQzNCLCtCQUE2Qjs7SUFHM0IsOEJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBrZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgb3B0aW9uczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuc3RvcmUgJiZcbiAgICAgIHR5cGVvZiBjb25maWcuc3RvcmUgPT09ICdvYmplY3QnICYmXG4gICAgICBPYmplY3Qua2V5cyhjb25maWcuc3RvcmUpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMuc3RvcmUgPSB7IC4uLnRoaXMuc3RvcmUsIC4uLmNvbmZpZy5zdG9yZSB9O1xuICAgIH1cbiAgfVxuXG4gIGhvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdChrZXk6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXQoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHNldChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IGRhdGE7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgcHVzaChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHVwZGF0ZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0gPSB7IC4uLnRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0sIC4uLmRhdGF9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIGRlbGV0ZShpbmRleDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxufVxuIl19