/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBarnService } from './ng-barn.service';
import { RequestService } from './request.service';
import { NgBarnComponent } from './ng-barn.component';
import { NgBarnFormComponent } from './components/ng-barn-form/ng-barn-form.component';
export class NgBarnModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1iYXJuLyIsInNvdXJjZXMiOlsibGliL25nLWJhcm4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTdkYsTUFBTTs7Ozs7SUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWM7UUFDM0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztnQkFDN0QsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOZ0Jhcm5TZXJ2aWNlIH0gZnJvbSAnLi9uZy1iYXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuL3JlcXVlc3Quc2VydmljZSc7XG5cbmltcG9ydCB7IE5nQmFybkNvbXBvbmVudCB9IGZyb20gJy4vbmctYmFybi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdCYXJuRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZy1iYXJuLWZvcm0vbmctYmFybi1mb3JtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ0Jhcm5Db21wb25lbnQsIE5nQmFybkZvcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQmFybk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Jhcm5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOZ0Jhcm5TZXJ2aWNlLCBSZXF1ZXN0U2VydmljZSwgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==