import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.sass'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputFileComponent),
        multi: true
    }]
})
export class InputFileComponent implements ControlValueAccessor {

    public file: File;

    constructor() {
    }

    convertBytesToKB(bytes: number): number {
        return Number((bytes / 1024).toFixed(1));
    }

    allowFileSize(fileSizeInByte: number, maxSize: number = 1024 * 5): boolean {
        const convertedSize = this.convertBytesToKB(fileSizeInByte);
        return convertedSize <= maxSize;
    }

    getFileInfo(): string {
        return `${this.file.name}, ${this.convertBytesToKB(this.file.size)}kb`;
    }

    fileSelectHandler(event: Event): void {
        const file = event.target['files'][0];
        if (this.allowFileSize(file.size)) {
            this.file = file;
            this.inputChange();
        }
    }

    inputChange(): void {
        this.writeValue(this.file);
        this.onTouched();
    }

    // code for Accessor
    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(file: File): void {
        this.onChange(file);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }


}
