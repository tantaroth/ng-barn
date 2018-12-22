import { __assign } from 'tslib';
import { Injectable, Inject, Component, Input, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreService = /** @class */ (function () {
    function StoreService(config) {
        this.config = config;
        this.store = {};
        this.options = {};
        if (config.store &&
            typeof config.store === "object" &&
            Object.keys(config.store).length > 0) {
            this.store = __assign({}, this.store, config.store);
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
        this.store[key || this.key][index] = __assign({}, this.store[key || this.key][index], data);
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
    /** @nocollapse */ StoreService.ngInjectableDef = defineInjectable({ factory: function StoreService_Factory() { return new StoreService(inject("config")); }, token: StoreService, providedIn: "root" });
    return StoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */
    NgBarnComponent.ctorParameters = function () { return []; };
    return NgBarnComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
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
    function () { };
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
            var response = {};
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
    };
    NgBarnFormComponent.decorators = [
        { type: Component, args: [{
                    selector: "tnt-barn-form",
                    template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgBarnFormComponent.ctorParameters = function () { return [
        { type: StoreService }
    ]; };
    NgBarnFormComponent.propDecorators = {
        index: [{ type: Input }],
        formGroup: [{ type: Input }],
        guardSave: [{ type: Input }],
        submitting: [{ type: Output }],
        submitted: [{ type: Output }],
        beforeUnloadHander: [{ type: HostListener, args: ["window:beforeunload", ["$event"],] }],
        onKeydownHandler: [{ type: HostListener, args: ["document:keydown", ["$event"],] }]
    };
    return NgBarnFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            providers: [StoreService, { provide: 'config', useValue: config }]
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StoreService, NgBarnComponent, NgBarnModule, NgBarnFormComponent as ɵb };

//# sourceMappingURL=ng-barn.js.map