/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StoreService } from '../../store.service';
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
        { type: StoreService }
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
export { NgBarnFormComponent };
if (false) {
    /** @type {?} */
    NgBarnFormComponent.prototype.saved;
    /** @type {?} */
    NgBarnFormComponent.prototype.editing;
    /** @type {?} */
    NgBarnFormComponent.prototype.index;
    /** @type {?} */
    NgBarnFormComponent.prototype.formGroup;
    /** @type {?} */
    NgBarnFormComponent.prototype.guardSave;
    /** @type {?} */
    NgBarnFormComponent.prototype.submitting;
    /** @type {?} */
    NgBarnFormComponent.prototype.submitted;
    /** @type {?} */
    NgBarnFormComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUluRDtJQXVDRSw2QkFDWSxLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBMUJyQixlQUFVLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDOztZQTJCdEQsTUFBTSxHQUFXLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFFbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUEzQkQsZ0RBQWtCOzs7O0lBRGxCLFVBQ21CLEtBQUs7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQURoQixVQUNpQixLQUFvQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNWLE1BQU0sR0FBUSxLQUFLLENBQUMsTUFBTTtZQUNoQyxJQUNJLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDMUIsTUFBTSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQy9CO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtTQUNKO0lBQ0wsQ0FBQzs7OztJQVVELHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFOztnQkFDbEIsUUFBUSxHQUFhLEVBQUU7WUFFM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNEhBQTRDOztpQkFFN0M7OztnQkFSUSxZQUFZOzs7d0JBY2xCLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUVMLE1BQU07NEJBQ04sTUFBTTtxQ0FFTixZQUFZLFNBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUNBUTlDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0QzlDLDBCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FoRVksbUJBQW1COzs7SUFFOUIsb0NBQXVCOztJQUN2QixzQ0FBeUI7O0lBRXpCLG9DQUF1Qjs7SUFDdkIsd0NBQThCOztJQUM5Qix3Q0FBNEI7O0lBRTVCLHlDQUErRDs7SUFDL0Qsd0NBQWdFOztJQXlCNUQsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0b3JlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG50LWJhcm4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2F2ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZWRpdGluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZ3VhcmRTYXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzdWJtaXR0aW5nOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcsIFsnJGV2ZW50J10pXG4gIGJlZm9yZVVubG9hZEhhbmRlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZWRpdGluZyAmJiAhdGhpcy5zYXZlZCkge1xuICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ndWFyZFNhdmUpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8XG4gICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZVNlcnZpY2VcbiAgKSB7XG4gICAgICBjb25zdCBjb25maWc6IENvbmZpZyA9IHN0b3JlLmhvdCgpO1xuXG4gICAgICBzdG9yZS5zZWxlY3QoY29uZmlnLmtleSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU3VibWl0KGluZGV4KSB7XG4gICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlOiBvYmplY3RbXSA9IFtdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnVwZGF0ZShpbmRleCwgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS5wdXNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcuZW1pdChyZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNhdmVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVkaXRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gIH1cblxufVxuIl19