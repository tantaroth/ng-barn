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
        { type: NgModule, args: [{
                    imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
                    declarations: [NgBarnComponent, NgBarnFormComponent],
                    exports: [NgBarnComponent, NgBarnFormComponent]
                },] }
    ];
    return NgBarnModule;
}());
export { NgBarnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYmFybi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1iYXJuLyIsInNvdXJjZXMiOlsibGliL25nLWJhcm4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdkY7SUFBQTtJQVlBLENBQUM7Ozs7O0lBTlEsb0JBQU87Ozs7SUFBZCxVQUFlLE1BQWM7UUFDM0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7Z0JBWEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztvQkFDN0QsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7aUJBQ2hEOztJQVFELG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nQmFyblNlcnZpY2UgfSBmcm9tICcuL25nLWJhcm4uc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTmdCYXJuQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1iYXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0Jhcm5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25nLWJhcm4tZm9ybS9uZy1iYXJuLWZvcm0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdCYXJuQ29tcG9uZW50LCBOZ0Jhcm5Gb3JtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05nQmFybkNvbXBvbmVudCwgTmdCYXJuRm9ybUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdCYXJuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQmFybk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05nQmFyblNlcnZpY2UsIFJlcXVlc3RTZXJ2aWNlLCB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl19