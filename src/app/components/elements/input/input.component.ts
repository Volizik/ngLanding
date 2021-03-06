import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }]
})
export class InputComponent implements ControlValueAccessor {

    @Input() type: 'text' | 'password' | 'email' | 'tel' = 'text';
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
