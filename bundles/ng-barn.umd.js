(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-barn', ['exports', '@angular/forms', '@angular/core'], factory) :
    (factory((global['ng-barn'] = {}),global.ng.forms,global.ng.core));
}(this, (function (exports,forms,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        StoreService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ["config",] }] }
            ];
        };
        /** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject("config")); }, token: StoreService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            this.submitting = new i0.EventEmitter();
            this.submitted = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: "tnt-barn-form",
                        template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgBarnFormComponent.ctorParameters = function () {
            return [
                { type: StoreService }
            ];
        };
        NgBarnFormComponent.propDecorators = {
            index: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }],
            guardSave: [{ type: i0.Input }],
            submitting: [{ type: i0.Output }],
            submitted: [{ type: i0.Output }],
            beforeUnloadHander: [{ type: i0.HostListener, args: ["window:beforeunload", ["$event"],] }],
            onKeydownHandler: [{ type: i0.HostListener, args: ["document:keydown", ["$event"],] }]
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
            { type: i0.NgModule, args: [{
                        imports: [forms.FormsModule, forms.ReactiveFormsModule],
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

    exports.StoreService = StoreService;
    exports.NgBarnComponent = NgBarnComponent;
    exports.NgBarnModule = NgBarnModule;
    exports.ɵb = NgBarnFormComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-barn.umd.js.map