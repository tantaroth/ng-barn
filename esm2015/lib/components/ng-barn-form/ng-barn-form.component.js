/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StoreService } from '../../store.service';
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
    { type: StoreService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJhcm4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNuRCxNQUFNOzs7O0lBa0NKLFlBQ1ksS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQTFCckIsZUFBVSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELGNBQVMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Y0EyQnRELE1BQU0sR0FBVyxLQUFLLENBQUMsR0FBRyxFQUFFO1FBRWxDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBM0JELGtCQUFrQixDQUFDLEtBQUs7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQW9CO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1YsTUFBTSxHQUFRLEtBQUssQ0FBQyxNQUFNO1lBQ2hDLElBQ0ksTUFBTSxDQUFDLE9BQU8sS0FBSyxPQUFPO2dCQUMxQixNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDL0I7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQzFCO1NBQ0o7SUFDTCxDQUFDOzs7O0lBVUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFOztnQkFDbEIsUUFBUSxHQUFhLEVBQUU7WUFFM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNEhBQTRDOzthQUU3Qzs7O1lBUlEsWUFBWTs7O29CQWNsQixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxNQUFNO3dCQUNOLE1BQU07aUNBRU4sWUFBWSxTQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDOytCQVE5QyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFsQjVDLG9DQUF1Qjs7SUFDdkIsc0NBQXlCOztJQUV6QixvQ0FBdUI7O0lBQ3ZCLHdDQUE4Qjs7SUFDOUIsd0NBQTRCOztJQUU1Qix5Q0FBK0Q7O0lBQy9ELHdDQUFnRTs7SUF5QjVELG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdG9yZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RudC1iYXJuLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctYmFybi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctYmFybi1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jhcm5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNhdmVkOiBib29sZWFuO1xuICBwcml2YXRlIGVkaXRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGd1YXJkU2F2ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc3VibWl0dGluZzogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKVxuICBiZWZvcmVVbmxvYWRIYW5kZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmd1YXJkU2F2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmVkaXRpbmcgJiYgIXRoaXMuc2F2ZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKHRoaXMuZ3VhcmRTYXZlKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fFxuICAgICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnNhdmVkID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmVTZXJ2aWNlXG4gICkge1xuICAgICAgY29uc3QgY29uZmlnOiBDb25maWcgPSBzdG9yZS5ob3QoKTtcblxuICAgICAgc3RvcmUuc2VsZWN0KGNvbmZpZy5rZXkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN1Ym1pdChpbmRleCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdChmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgICAgIGxldCByZXNwb25zZTogb2JqZWN0W10gPSBbXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zdG9yZS51cGRhdGUoaW5kZXgsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc3RvcmUucHVzaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdWJtaXR0aW5nLmVtaXQocmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zYXZlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lZGl0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICB9XG5cbn1cbiJdfQ==