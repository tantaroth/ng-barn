import { __assign } from 'tslib';
import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
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
    /** @nocollapse */ RequestService.ngInjectableDef = defineInjectable({ factory: function RequestService_Factory() { return new RequestService(inject(HttpClient), inject("config")); }, token: RequestService, providedIn: "root" });
    return RequestService;
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
                    selector: 'tnt-barn-form',
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
            providers: [NgBarnService, RequestService, { provide: 'config', useValue: config }]
        };
    };
    NgBarnModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
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

export { NgBarnService, RequestService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9yZXF1ZXN0LnNlcnZpY2UudHMiLCJuZzovL25nLWJhcm4vbGliL25nLWJhcm4uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9jb21wb25lbnRzL25nLWJhcm4tZm9ybS9uZy1iYXJuLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9uZy1iYXJuLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBrZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgb3B0aW9uczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuc3RvcmUgJiZcbiAgICAgIHR5cGVvZiBjb25maWcuc3RvcmUgPT09ICdvYmplY3QnICYmXG4gICAgICBPYmplY3Qua2V5cyhjb25maWcuc3RvcmUpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMuc3RvcmUgPSB7IC4uLnRoaXMuc3RvcmUsIC4uLmNvbmZpZy5zdG9yZSB9O1xuICAgIH1cbiAgfVxuXG4gIGhvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdChrZXk6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXQoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHNldChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IGRhdGE7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgcHVzaChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHVwZGF0ZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0gPSB7IC4uLnRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0sIC4uLmRhdGF9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIGRlbGV0ZShpbmRleDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkgeyB9XG5cbiAgZ2V0KCkge1xuICAgIC8vIHRoaXMuX3JlcXVlc3QodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLCBrZXkgfHwgdGhpcy5rZXkpXG4gICAgLy8gLnN1YnNjcmliZShcbiAgICAvLyAgICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldID0gW1xuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9XG4gICAgLy8gICAgICAgXTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdChkYXRhOiBvYmplY3RbXSwga2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZyb20oZGF0YSlcbiAgICAucGlwZShkZWxheSg1MDAwKSk7XG4gICAgLy8gY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgJy91cGxvYWQvZmlsZScsIG51bGwsIHtcbiAgICAvLyAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bnQtbmctYmFybicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1iYXJuIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nQmFyblNlcnZpY2UgfSBmcm9tICcuLi8uLi9uZy1iYXJuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG50LWJhcm4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2F2ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZWRpdGluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZ3VhcmRTYXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzdWJtaXR0aW5nOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcsIFsnJGV2ZW50J10pXG4gIGJlZm9yZVVubG9hZEhhbmRlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZWRpdGluZyAmJiAhdGhpcy5zYXZlZCkge1xuICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ndWFyZFNhdmUpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8XG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN0b3JlOiBOZ0Jhcm5TZXJ2aWNlXG4gICkge1xuICAgICAgY29uc3QgY29uZmlnOiBDb25maWcgPSBzdG9yZS5ob3QoKTtcblxuICAgICAgc3RvcmUuc2VsZWN0KGNvbmZpZy5rZXkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN1Ym1pdChpbmRleCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdChmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgICAgIGxldCByZXNwb25zZTogb2JqZWN0W10gPSBbXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS51cGRhdGUoaW5kZXgsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc3RvcmUucHVzaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdWJtaXR0aW5nLmVtaXQocmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zYXZlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lZGl0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nQmFyblNlcnZpY2UgfSBmcm9tICcuL25nLWJhcm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTmdCYXJuQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1iYXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0Jhcm5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25nLWJhcm4tZm9ybS9uZy1iYXJuLWZvcm0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdCYXJuQ29tcG9uZW50LCBOZ0Jhcm5Gb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQmFybk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05nQmFyblNlcnZpY2UsIFJlcXVlc3RTZXJ2aWNlLCB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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