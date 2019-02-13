import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input-phone',
    templateUrl: './input-phone.component.html',
    styleUrls: ['./input-phone.component.sass'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputPhoneComponent),
        multi: true
    }]
})
export class InputPhoneComponent implements ControlValueAccessor {

    @Input() name = '';
    @Input() placeholder = '';
    @Input() mask = '';
    @Input() prefix = '';
    @Input() showMaskTyped = true;
    @Input() errorMessages = null;

    constructor() {
    }

    inputChange(value: string): void {
        this.writeValue(value);
        this.onTouched();
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: string): void {
        this.onChange(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
