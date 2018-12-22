/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { StoreService } from "../../store.service";
export class NgBarnFormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNuRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBOEI5QixZQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBdEI3QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDOztjQXNCeEQsTUFBTSxHQUFXLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFFbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUF0QkQsa0JBQWtCLENBQUMsS0FBSztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDL0IsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixNQUFNLEdBQVEsS0FBSyxDQUFDLE1BQU07WUFDaEMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBUUQsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFOztnQkFDcEIsUUFBUSxHQUFXLEVBQUU7WUFFekIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRDtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNEhBQTRDOzthQUU3Qzs7OztZQVJRLFlBQVk7OztvQkFhbEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsTUFBTTt3QkFDTixNQUFNO2lDQUVOLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFROUMsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBbEI1QyxvQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUF5Qjs7SUFFekIsb0NBQXVCOztJQUN2Qix3Q0FBOEI7O0lBQzlCLHdDQUE0Qjs7SUFFNUIseUNBQWdFOztJQUNoRSx3Q0FBZ0U7Ozs7O0lBcUJwRCxvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc3RvcmUuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidG50LWJhcm4tZm9ybVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL25nLWJhcm4tZm9ybS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbmctYmFybi1mb3JtLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc2F2ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZWRpdGluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZ3VhcmRTYXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzdWJtaXR0aW5nOiBFdmVudEVtaXR0ZXI8b2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6YmVmb3JldW5sb2FkXCIsIFtcIiRldmVudFwiXSlcbiAgYmVmb3JlVW5sb2FkSGFuZGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICBpZiAodGhpcy5lZGl0aW5nICYmICF0aGlzLnNhdmVkKSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRvY3VtZW50OmtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICBvbktleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8IHRhcmdldC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zYXZlZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZVNlcnZpY2UpIHtcbiAgICBjb25zdCBjb25maWc6IENvbmZpZyA9IHN0b3JlLmhvdCgpO1xuXG4gICAgc3RvcmUuc2VsZWN0KGNvbmZpZy5rZXkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU3VibWl0KGluZGV4KSB7XG4gICAgdGhpcy5zdWJtaXR0ZWQuZW1pdChmYWxzZSk7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgIGxldCByZXNwb25zZTogb2JqZWN0ID0ge307XG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnVwZGF0ZShpbmRleCwgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnN0b3JlLnB1c2godGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN1Ym1pdHRpbmcuZW1pdChyZXNwb25zZSk7XG4gICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5zYXZlZCA9IHRydWU7XG4gICAgICB0aGlzLmVkaXRpbmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=