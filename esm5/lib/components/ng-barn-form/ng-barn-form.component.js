/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { StoreService } from "../../store.service";
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
export { NgBarnFormComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgBarnFormComponent.prototype.saved;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    NgBarnFormComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUluRDtJQW1DRSw2QkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQXRCN0IsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGNBQVMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7WUFzQnhELE1BQU0sR0FBVyxLQUFLLENBQUMsR0FBRyxFQUFFO1FBRWxDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBdEJELGdEQUFrQjs7OztJQURsQixVQUNtQixLQUFLO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMvQixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFEaEIsVUFDaUIsS0FBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixNQUFNLEdBQVEsS0FBSyxDQUFDLE1BQU07WUFDaEMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBUUQsc0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYixzQ0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7O2dCQUNwQixRQUFRLEdBQVcsRUFBRTtZQUV6QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDMUI7SUFDSCxDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0SEFBNEM7O2lCQUU3Qzs7OztnQkFSUSxZQUFZOzs7d0JBYWxCLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUVMLE1BQU07NEJBQ04sTUFBTTtxQ0FFTixZQUFZLFNBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUNBUTlDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFxQzlDLDBCQUFDO0NBQUEsQUE3REQsSUE2REM7U0F4RFksbUJBQW1COzs7Ozs7SUFDOUIsb0NBQXVCOzs7OztJQUN2QixzQ0FBeUI7O0lBRXpCLG9DQUF1Qjs7SUFDdkIsd0NBQThCOztJQUM5Qix3Q0FBNEI7O0lBRTVCLHlDQUFnRTs7SUFDaEUsd0NBQWdFOzs7OztJQXFCcEQsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3N0b3JlLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRudC1iYXJuLWZvcm1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9uZy1iYXJuLWZvcm0uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHNhdmVkOiBib29sZWFuO1xuICBwcml2YXRlIGVkaXRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGd1YXJkU2F2ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc3VibWl0dGluZzogRXZlbnRFbWl0dGVyPG9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKFwid2luZG93OmJlZm9yZXVubG9hZFwiLCBbXCIkZXZlbnRcIl0pXG4gIGJlZm9yZVVubG9hZEhhbmRlcihldmVudCkge1xuICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgaWYgKHRoaXMuZWRpdGluZyAmJiAhdGhpcy5zYXZlZCkge1xuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgb25LZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09IFwiSU5QVVRcIiB8fCB0YXJnZXQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2F2ZWQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmVTZXJ2aWNlKSB7XG4gICAgY29uc3QgY29uZmlnOiBDb25maWcgPSBzdG9yZS5ob3QoKTtcblxuICAgIHN0b3JlLnNlbGVjdChjb25maWcua2V5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBvblN1Ym1pdChpbmRleCkge1xuICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoZmFsc2UpO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICBsZXQgcmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS51cGRhdGUoaW5kZXgsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS5wdXNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdWJtaXR0aW5nLmVtaXQocmVzcG9uc2UpO1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMuc2F2ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lZGl0aW5nID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19