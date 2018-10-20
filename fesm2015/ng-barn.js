import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgBarnService {
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
NgBarnService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgBarnService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ NgBarnService.ngInjectableDef = defineInjectable({ factory: function NgBarnService_Factory() { return new NgBarnService(inject("config")); }, token: NgBarnService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RequestService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @return {?}
     */
    get() {
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
    }
    /**
     * @param {?} data
     * @param {?=} key
     * @return {?}
     */
    _request(data, key) {
        return from(data)
            .pipe(delay(5000));
        // const req = new HttpRequest('POST', '/upload/file', null, {
        //   reportProgress: true
        // });
        // this.http.request(req);
    }
}
RequestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RequestService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ RequestService.ngInjectableDef = defineInjectable({ factory: function RequestService_Factory() { return new RequestService(inject(HttpClient), inject("config")); }, token: RequestService, providedIn: "root" });

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
    { type: NgBarnService }
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
            providers: [NgBarnService, RequestService, { provide: 'config', useValue: config }]
        };
    }
}
NgBarnModule.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
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

export { NgBarnService, RequestService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9yZXF1ZXN0LnNlcnZpY2UudHMiLCJuZzovL25nLWJhcm4vbGliL25nLWJhcm4uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9jb21wb25lbnRzL25nLWJhcm4tZm9ybS9uZy1iYXJuLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1iYXJuL2xpYi9uZy1iYXJuLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBrZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZTogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgb3B0aW9uczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuc3RvcmUgJiZcbiAgICAgIHR5cGVvZiBjb25maWcuc3RvcmUgPT09ICdvYmplY3QnICYmXG4gICAgICBPYmplY3Qua2V5cyhjb25maWcuc3RvcmUpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMuc3RvcmUgPSB7IC4uLnRoaXMuc3RvcmUsIC4uLmNvbmZpZy5zdG9yZSB9O1xuICAgIH1cbiAgfVxuXG4gIGhvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdChrZXk6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXQoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHNldChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IGRhdGE7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbiAgcHVzaChkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XS5wdXNoKGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHVwZGF0ZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QsIGtleT86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0gPSB7IC4uLnRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XVtpbmRleF0sIC4uLmRhdGF9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIGRlbGV0ZShpbmRleDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkgeyB9XG5cbiAgZ2V0KCkge1xuICAgIC8vIHRoaXMuX3JlcXVlc3QodGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLCBrZXkgfHwgdGhpcy5rZXkpXG4gICAgLy8gLnN1YnNjcmliZShcbiAgICAvLyAgICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldID0gW1xuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnWm9lJyB9LFxuICAgIC8vICAgICAgICAgeyBuYW1lOiAnSmV5JyB9XG4gICAgLy8gICAgICAgXTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdChkYXRhOiBvYmplY3RbXSwga2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZyb20oZGF0YSlcbiAgICAucGlwZShkZWxheSg1MDAwKSk7XG4gICAgLy8gY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgJy91cGxvYWQvZmlsZScsIG51bGwsIHtcbiAgICAvLyAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bnQtbmctYmFybicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1iYXJuIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nQmFyblNlcnZpY2UgfSBmcm9tICcuLi8uLi9uZy1iYXJuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG50LWJhcm4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2F2ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZWRpdGluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZ3VhcmRTYXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzdWJtaXR0aW5nOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcsIFsnJGV2ZW50J10pXG4gIGJlZm9yZVVubG9hZEhhbmRlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZWRpdGluZyAmJiAhdGhpcy5zYXZlZCkge1xuICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ndWFyZFNhdmUpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8XG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN0b3JlOiBOZ0Jhcm5TZXJ2aWNlXG4gICkge1xuICAgICAgY29uc3QgY29uZmlnOiBDb25maWcgPSBzdG9yZS5ob3QoKTtcblxuICAgICAgc3RvcmUuc2VsZWN0KGNvbmZpZy5rZXkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN1Ym1pdChpbmRleCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdChmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgICAgIGxldCByZXNwb25zZTogb2JqZWN0W10gPSBbXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS51cGRhdGUoaW5kZXgsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc3RvcmUucHVzaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdWJtaXR0aW5nLmVtaXQocmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zYXZlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lZGl0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nQmFyblNlcnZpY2UgfSBmcm9tICcuL25nLWJhcm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTmdCYXJuQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1iYXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0Jhcm5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25nLWJhcm4tZm9ybS9uZy1iYXJuLWZvcm0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdCYXJuQ29tcG9uZW50LCBOZ0Jhcm5Gb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQmFybk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05nQmFyblNlcnZpY2UsIFJlcXVlc3RTZXJ2aWNlLCB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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