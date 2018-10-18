import { __assign } from 'tslib';
import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBarnService = /** @class */ (function () {
    function NgBarnService(config) {
        this.config = config;
        this.store = {};
        this.options = {};
        if (config.store &&
            typeof config.store === 'object' &&
            Object.keys(config.store).length > 0) {
            this.store = __assign({}, this.store, config.store);
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
        this.store[key || this.key][index] = __assign({}, this.store[key || this.key][index], data);
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
    /** @nocollapse */ NgBarnService.ngInjectableDef = defineInjectable({ factory: function NgBarnService_Factory() { return new NgBarnService(inject("config")); }, token: NgBarnService, providedIn: "root" });
    return NgBarnService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBarnComponent = /** @class */ (function () {
    function NgBarnComponent() {
    }
    /**
     * @return {?}
     */
    NgBarnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgBarnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tnt-ng-barn',
                    template: "\n    <p>\n      ng-barn works!\n    </p>\n  "
                }] }
    ];
    NgBarnComponent.ctorParameters = function () { return []; };
    return NgBarnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBarnFormComponent = /** @class */ (function () {
    function NgBarnFormComponent(store) {
        this.store = store;
        this.submitting = new EventEmitter();
        this.submitted = new EventEmitter();
        /** @type {?} */
        var config = store.hot();
        store.select(config.key);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgBarnFormComponent.prototype.beforeUnloadHander = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.guardSave) {
            if (this.editing && !this.saved) {
                event.returnValue = true;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgBarnFormComponent.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.guardSave) {
            /** @type {?} */
            var target = event.target;
            if (target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                this.editing = true;
                this.saved = undefined;
            }
        }
    };
    /**
     * @return {?}
     */
    NgBarnFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgBarnFormComponent.prototype.onSubmit = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.submitted.emit(false);
        if (this.formGroup.valid) {
            /** @type {?} */
            var response = [];
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
    };
    NgBarnFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tnt-ng-barn-form',
                    template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                    styles: [""]
                }] }
    ];
    NgBarnFormComponent.ctorParameters = function () { return [
        { type: NgBarnService }
    ]; };
    NgBarnFormComponent.propDecorators = {
        index: [{ type: Input }],
        formGroup: [{ type: Input }],
        guardSave: [{ type: Input }],
        submitting: [{ type: Output }],
        submitted: [{ type: Output }],
        beforeUnloadHander: [{ type: HostListener, args: ['window:beforeunload', ['$event'],] }],
        onKeydownHandler: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return NgBarnFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBarnModule = /** @class */ (function () {
    function NgBarnModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgBarnModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgBarnModule,
            providers: [NgBarnService, { provide: 'config', useValue: config }]
        };
    };
    NgBarnModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, ReactiveFormsModule],
                    declarations: [NgBarnComponent, NgBarnFormComponent],
                    exports: [NgBarnComponent, NgBarnFormComponent]
                },] }
    ];
    return NgBarnModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgBarnService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9uZy1iYXJuLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYmFybi9saWIvY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFyblNlcnZpY2Uge1xuXG4gIHByaXZhdGUga2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgc3RvcmU6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb25maWdcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY29uZmlnLnN0b3JlICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnN0b3JlID09PSAnb2JqZWN0JyAmJlxuICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JlKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5jb25maWcuc3RvcmUgfTtcbiAgICB9XG4gIH1cblxuICBob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgIH07XG4gIH1cblxuICBzZWxlY3Qoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0KGtleT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBzZXQoZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHB1c2goZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ucHVzaChkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdID0geyAuLi50aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdLCAuLi5kYXRhfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBkZWxldGUoaW5kZXg6IG51bWJlciwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RudC1uZy1iYXJuJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nLWJhcm4gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmdCYXJuU2VydmljZSB9IGZyb20gJy4uLy4uL25nLWJhcm4uc2VydmljZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bnQtbmctYmFybi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzYXZlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBlZGl0aW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBndWFyZFNhdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHN1Ym1pdHRpbmc6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJywgWyckZXZlbnQnXSlcbiAgYmVmb3JlVW5sb2FkSGFuZGVyKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ndWFyZFNhdmUpIHtcbiAgICAgICAgICBpZiAodGhpcy5lZGl0aW5nICYmICF0aGlzLnNhdmVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcbiAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zYXZlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc3RvcmU6IE5nQmFyblNlcnZpY2VcbiAgKSB7XG4gICAgICBjb25zdCBjb25maWc6IENvbmZpZyA9IHN0b3JlLmhvdCgpO1xuXG4gICAgICBzdG9yZS5zZWxlY3QoY29uZmlnLmtleSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU3VibWl0KGluZGV4KSB7XG4gICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlOiBvYmplY3RbXSA9IFtdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnVwZGF0ZShpbmRleCwgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS5wdXNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcuZW1pdChyZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNhdmVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVkaXRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOZ0Jhcm5TZXJ2aWNlIH0gZnJvbSAnLi9uZy1iYXJuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOZ0Jhcm5Db21wb25lbnQgfSBmcm9tICcuL25nLWJhcm4uY29tcG9uZW50JztcbmltcG9ydCB7IE5nQmFybkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmctYmFybi1mb3JtL25nLWJhcm4tZm9ybS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL21vZGVscy9jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ0Jhcm5Db21wb25lbnQsIE5nQmFybkZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdCYXJuQ29tcG9uZW50LCBOZ0Jhcm5Gb3JtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdCYXJuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbTmdCYXJuU2VydmljZSwgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFhRSx1QkFDNEIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBSzNCLElBQ0UsTUFBTSxDQUFDLEtBQUs7WUFDWixPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQztZQUNBLElBQUksQ0FBQyxLQUFLLGdCQUFRLElBQUksQ0FBQyxLQUFLLEVBQUssTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7SUFFRCwyQkFBRzs7O0lBQUg7UUFDRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7S0FDSDs7Ozs7O0lBRUQsOEJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7Ozs7SUFFRCwyQkFBRzs7OztJQUFILFVBQUksR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUks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