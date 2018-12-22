import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ StoreService.ngInjectableDef = defineInjectable({ factory: function StoreService_Factory() { return new StoreService(inject("config")); }, token: StoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */
NgBarnComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
                this.editing = true;
                this.saved = undefined;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} index
     * @return {?}
     */
    onSubmit(index) {
        this.submitted.emit(false);
        if (this.formGroup.valid) {
            /** @type {?} */
            let response = {};
            if (typeof index === "number") {
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
                selector: "tnt-barn-form",
                template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgBarnFormComponent.ctorParameters = () => [
    { type: StoreService }
];
NgBarnFormComponent.propDecorators = {
    index: [{ type: Input }],
    formGroup: [{ type: Input }],
    guardSave: [{ type: Input }],
    submitting: [{ type: Output }],
    submitted: [{ type: Output }],
    beforeUnloadHander: [{ type: HostListener, args: ["window:beforeunload", ["$event"],] }],
    onKeydownHandler: [{ type: HostListener, args: ["document:keydown", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StoreService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=ng-barn.js.map