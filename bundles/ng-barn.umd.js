(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/internal/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-barn', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/internal/operators', '@angular/forms'], factory) :
    (factory((global['ng-barn'] = {}),global.ng.core,global.ng.common.http,global.rxjs,global.rxjs['internal/operators'],global.ng.forms));
}(this, (function (exports,i0,i1,rxjs,operators,forms) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        NgBarnService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ NgBarnService.ngInjectableDef = i0.defineInjectable({ factory: function NgBarnService_Factory() { return new NgBarnService(i0.inject("config")); }, token: NgBarnService, providedIn: "root" });
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
                return rxjs.from(data)
                    .pipe(operators.delay(5000));
                // const req = new HttpRequest('POST', '/upload/file', null, {
                //   reportProgress: true
                // });
                // this.http.request(req);
            };
        RequestService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        RequestService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ RequestService.ngInjectableDef = i0.defineInjectable({ factory: function RequestService_Factory() { return new RequestService(i0.inject(i1.HttpClient), i0.inject("config")); }, token: RequestService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
                        selector: 'tnt-barn-form',
                        template: "<form (ngSubmit)=\"onSubmit(index)\" [formGroup]=\"formGroup\" novalidate>\n  <ng-content></ng-content>\n</form>",
                        styles: [""]
                    }] }
        ];
        NgBarnFormComponent.ctorParameters = function () {
            return [
                { type: NgBarnService }
            ];
        };
        NgBarnFormComponent.propDecorators = {
            index: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }],
            guardSave: [{ type: i0.Input }],
            submitting: [{ type: i0.Output }],
            submitted: [{ type: i0.Output }],
            beforeUnloadHander: [{ type: i0.HostListener, args: ['window:beforeunload', ['$event'],] }],
            onKeydownHandler: [{ type: i0.HostListener, args: ['document:keydown', ['$event'],] }]
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
            { type: i0.NgModule, args: [{
                        imports: [i1.HttpClientModule, forms.FormsModule, forms.ReactiveFormsModule],
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

    exports.NgBarnService = NgBarnService;
    exports.RequestService = RequestService;
    exports.NgBarnComponent = NgBarnComponent;
    exports.NgBarnModule = NgBarnModule;
    exports.ɵb = NgBarnFormComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZy1iYXJuL2xpYi9uZy1iYXJuLnNlcnZpY2UudHMiLCJuZzovL25nLWJhcm4vbGliL3JlcXVlc3Quc2VydmljZS50cyIsIm5nOi8vbmctYmFybi9saWIvbmctYmFybi5jb21wb25lbnQudHMiLCJuZzovL25nLWJhcm4vbGliL2NvbXBvbmVudHMvbmctYmFybi1mb3JtL25nLWJhcm4tZm9ybS5jb21wb25lbnQudHMiLCJuZzovL25nLWJhcm4vbGliL25nLWJhcm4ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFyblNlcnZpY2Uge1xuXG4gIHByaXZhdGUga2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgc3RvcmU6IG9iamVjdCA9IHt9O1xuICBwcml2YXRlIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb25maWdcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY29uZmlnLnN0b3JlICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnN0b3JlID09PSAnb2JqZWN0JyAmJlxuICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JlKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5jb25maWcuc3RvcmUgfTtcbiAgICB9XG4gIH1cblxuICBob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgIH07XG4gIH1cblxuICBzZWxlY3Qoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0KGtleT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBzZXQoZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XTtcbiAgfVxuXG4gIHB1c2goZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV0ucHVzaChkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0LCBrZXk/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdID0geyAuLi50aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV1baW5kZXhdLCAuLi5kYXRhfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlW2tleSB8fCB0aGlzLmtleV07XG4gIH1cblxuICBkZWxldGUoaW5kZXg6IG51bWJlciwga2V5Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZVtrZXkgfHwgdGhpcy5rZXldO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBmcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHsgfVxuXG4gIGdldCgpIHtcbiAgICAvLyB0aGlzLl9yZXF1ZXN0KHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSwga2V5IHx8IHRoaXMua2V5KVxuICAgIC8vIC5zdWJzY3JpYmUoXG4gICAgLy8gICAoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc3RvcmVba2V5IHx8IHRoaXMua2V5XSA9IFtcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ1pvZScgfSxcbiAgICAvLyAgICAgICAgIHsgbmFtZTogJ0pleScgfVxuICAgIC8vICAgICAgIF07XG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVlc3QoZGF0YTogb2JqZWN0W10sIGtleT86IHN0cmluZykge1xuICAgIHJldHVybiBmcm9tKGRhdGEpXG4gICAgLnBpcGUoZGVsYXkoNTAwMCkpO1xuICAgIC8vIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsICcvdXBsb2FkL2ZpbGUnLCBudWxsLCB7XG4gICAgLy8gICByZXBvcnRQcm9ncmVzczogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG50LW5nLWJhcm4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmctYmFybiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOZ0Jhcm5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmctYmFybi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RudC1iYXJuLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctYmFybi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctYmFybi1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNhdmVkOiBib29sZWFuO1xuICBwcml2YXRlIGVkaXRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGd1YXJkU2F2ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc3VibWl0dGluZzogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKVxuICBiZWZvcmVVbmxvYWRIYW5kZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmVkaXRpbmcgJiYgIXRoaXMuc2F2ZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fFxuICAgICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnNhdmVkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzdG9yZTogTmdCYXJuU2VydmljZVxuICApIHtcbiAgICAgIGNvbnN0IGNvbmZpZzogQ29uZmlnID0gc3RvcmUuaG90KCk7XG5cbiAgICAgIHN0b3JlLnNlbGVjdChjb25maWcua2V5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25TdWJtaXQoaW5kZXgpIHtcbiAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2U6IG9iamVjdFtdID0gW107XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc3RvcmUudXBkYXRlKGluZGV4LCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnB1c2godGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3VibWl0dGluZy5lbWl0KHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuc2F2ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZWRpdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOZ0Jhcm5TZXJ2aWNlIH0gZnJvbSAnLi9uZy1iYXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuL3JlcXVlc3Quc2VydmljZSc7XG5cbmltcG9ydCB7IE5nQmFybkNvbXBvbmVudCB9IGZyb20gJy4vbmctYmFybi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdCYXJuRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0Jhcm5Db21wb25lbnQsIE5nQmFybkZvcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Jhcm5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOZ0Jhcm5TZXJ2aWNlLCBSZXF1ZXN0U2VydmljZSwgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSW5qZWN0IiwiZnJvbSIsImRlbGF5IiwiSHR0cENsaWVudCIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFF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