/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from './store.service';
import { NgBarnComponent } from './ng-barn.component';
import { NgBarnFormComponent } from './components/ng-barn-form/ng-barn-form.component';
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
export { NgBarnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1iYXJuLyIsInNvdXJjZXMiOlsibGliL25nLWJhcm4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUl2RjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFOUSxvQkFBTzs7OztJQUFkLFVBQWUsTUFBYztRQUMzQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUM7b0JBQzNDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2lCQUNoRDs7SUFRRCxtQkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4vc3RvcmUuc2VydmljZSc7XG5cbmltcG9ydCB7IE5nQmFybkNvbXBvbmVudCB9IGZyb20gJy4vbmctYmFybi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdCYXJuRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0Jhcm5Db21wb25lbnQsIE5nQmFybkZvcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Jhcm5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtTdG9yZVNlcnZpY2UsIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfV1cbiAgICB9O1xuICB9XG59XG4iXX0=