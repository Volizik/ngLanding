import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SharedService} from '../../../services/shared.service';
import {IPosition} from '../../../interfaces';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.sass'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
    }]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

    public positions: Observable<IPosition[]>;
    @Input() errorMessages = null;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
        this.positions = this.sharedService
            .getPositions()
            .pipe(map((val) => val.positions));
    }

    onSelectChange(event: Event): void {
        this.writeValue(event.target['value']);
        this.onTouched();
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: IPosition): void {
        this.onChange(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
