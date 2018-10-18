import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgBarnService } from '../../ng-barn.service';
export declare class NgBarnFormComponent implements OnInit {
    private store;
    private saved;
    private editing;
    index: number;
    formGroup: FormGroup;
    guardSave: boolean;
    submitting: EventEmitter<any[]>;
    submitted: EventEmitter<boolean>;
    beforeUnloadHander(event: any): void;
    onKeydownHandler(event: KeyboardEvent): void;
    constructor(store: NgBarnService);
    ngOnInit(): void;
    onSubmit(index: any): void;
}
