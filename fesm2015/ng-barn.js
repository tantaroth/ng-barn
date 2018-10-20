import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StoreService {
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
/** @nocollapse */ StoreService.ngInjectableDef = defineInjectable({ factory: function StoreService_Factory() { return new StoreService(inject("config")); }, token: StoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgBarnComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgBarnComponent.decorators = [
    { type: Component, args: [{
                selector: 'tnt-ng-barn',
                template: `
    <p>
      ng-barn works!
    </p>
  `
            }] }
];
NgBarnComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgBarnFormComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.submitting = new EventEmitter();
        this.submitted = new EventEmitter();
        /** @type {?} */
        const config = store.hot();
        store.select(config.key);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    beforeUnloadHander(event) {
        if (this.guardSave) {
            if (this.editing && !this.saved) {
                event.returnValue = true;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydownHandler(event) {
        if (this.guardSave) {
            /** @type {?} */
            const target = event.target;
            if (target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                this.editing = true;
                this.saved = undefined;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onSubmit(index) {
        this.submitted.emit(false);
        if (this.formGroup.valid) {
            /** @type {?} */
            let response = [];
            if (typeof index === 'number') {
                response = this.store.update(index, this.formGroup.value);
            }
            else {
                response = this.store.push(this.formGroup.value);
            }
            this.submitting.emit(response);
            this.submitted.emit(true);
            this.saved = true;
            this.editing = undefined;
        }
    }
}
NgBarnFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'tnt-barn-form',
                template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                styles: [""]
            }] }
];
NgBarnFormComponent.ctorParameters = () => [
    { type: StoreService }
];
NgBarnFormComponent.propDecorators = {
    index: [{ type: Input }],
    formGroup: [{ type: Input }],
    guardSave: [{ type: Input }],
    submitting: [{ type: Output }],
    submitted: [{ type: Output }],
    beforeUnloadHander: [{ type: HostListener, args: ['window:beforeunload', ['$event'],] }],
    onKeydownHandler: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgBarnModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgBarnModule,
            providers: [StoreService, { provide: 'config', useValue: config }]
        };
    }
}
NgBarnModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, ReactiveFormsModule],
                declarations: [NgBarnComponent, NgBarnFormComponent],
                exports: [NgBarnComponent, NgBarnFormComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { StoreService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYmFybi9saWIvc3RvcmUuc2VydmljZS50cyIsIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5jb21wb25lbnQudHMiLCJuZzovL25nLWJhcm4vbGliL2NvbXBvbmVudHMvbmctYmFybi1mb3JtL25nLWJhcm4tZm9ybS5jb21wb25lbnQudHMiLCJuZzovL25nLWJhcm4vbGliL25nLWJhcm4ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL21vZGVscy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUga2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgc3RvcmU6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb25maWdcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY29uZmlnLnN0b3JlICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnN0b3JlID09PSAnb2JqZWN0JyAmJlxuICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JlKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5jb25maWcuc3RvcmUgfTtcbiAgICB9XG4gIH1cblxuICBob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgIH07XG4gIH1cblxuICBzZWxlY3Qoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0KGtleT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBzZXQoZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHB1c2goZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ucHVzaChkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdID0geyAuLi50aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdLCAuLi5kYXRhfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBkZWxldGUoaW5kZXg6IG51bWJlciwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RudC1uZy1iYXJuJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLWJhcm4gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RvcmUuc2VydmljZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bnQtYmFybi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzYXZlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBlZGl0aW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBndWFyZFNhdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHN1Ym1pdHRpbmc6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJywgWyckZXZlbnQnXSlcbiAgYmVmb3JlVW5sb2FkSGFuZGVyKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ndWFyZFNhdmUpIHtcbiAgICAgICAgICBpZiAodGhpcy5lZGl0aW5nICYmICF0aGlzLnNhdmVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcbiAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zYXZlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlU2VydmljZVxuICApIHtcbiAgICAgIGNvbnN0IGNvbmZpZzogQ29uZmlnID0gc3RvcmUuaG90KCk7XG5cbiAgICAgIHN0b3JlLnNlbGVjdChjb25maWcua2V5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25TdWJtaXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2U6IG9iamVjdFtdID0gW107XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc3RvcmUudXBkYXRlKGluZGV4LCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnB1c2godGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3VibWl0dGluZy5lbWl0KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuc2F2ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZWRpdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4vc3RvcmUuc2VydmljZSc7XG5cbmltcG9ydCB7IE5nQmFybkNvbXBvbmVudCB9IGZyb20gJy4vbmctYmFybi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdCYXJuRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0Jhcm5Db21wb25lbnQsIE5nQmFybkZvcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Jhcm5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtTdG9yZVNlcnZpY2UsIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBYUUsWUFDNEIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBSzNCLElBQ0UsTUFBTSxDQUFDLEtBQUs7WUFDWixPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQztZQUNBLElBQUksQ0FBQyxLQUFLLHFCQUFRLElBQUksQ0FBQyxLQUFLLEVBQUssTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7SUFFRCxHQUFHO1FBQ0QsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0tBQ0g7Ozs7OztJQUVELE1BQU0sQ0FBQyxHQUFXLEVBQUUsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDOzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQVk7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxHQUFZO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxHQUFZO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFLLElBQUksQ0FBQyxDQUFDO1FBRXZGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLEdBQVk7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEM7OztZQTNERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FRSSxNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7QUNkcEI7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7OztHQUlUO2FBRUY7Ozs7Ozs7O0FDVkQ7Ozs7SUE4Q0UsWUFDWSxLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBMUJyQixlQUFVLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDOztjQTJCdEQsTUFBTSxHQUFXLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFFbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7O0lBM0JELGtCQUFrQixDQUFDLEtBQUs7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBQ0o7S0FDSjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFvQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2tCQUNWLE1BQU0sR0FBUSxLQUFLLENBQUMsTUFBTTtZQUNoQyxJQUNJLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDMUIsTUFBTSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQy9CO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtTQUNKO0tBQ0o7Ozs7SUFVRCxRQUFRO0tBQ1A7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFOztnQkFDbEIsUUFBUSxHQUFhLEVBQUU7WUFFM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzVCO0tBQ0o7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDRIQUE0Qzs7YUFFN0M7OztZQVJRLFlBQVk7OztvQkFjbEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsTUFBTTt3QkFDTixNQUFNO2lDQUVOLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFROUMsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0FDaEM5Qzs7Ozs7SUFnQkUsT0FBTyxPQUFPLENBQUMsTUFBYztRQUMzQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDbkUsQ0FBQztLQUNIOzs7WUFYRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDO2dCQUMzQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQzthQUNoRDs7Ozs7Ozs7Ozs7Ozs7OyJ9