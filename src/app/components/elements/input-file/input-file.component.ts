import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.sass']
})
export class InputFileComponent implements OnInit {

    public file: File;
    @ViewChild('fileNotSelected') fileNotSelected: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    convertBytesToKB(bytes: number): number {
        return Number((bytes / 1024).toFixed(1));
    }

    fileSelectHandler(event: Event) {
        if (!this.allowFileSize()) {
            this.file = event.target['files'][0];
        }
    }

    getFileInfo(): string {
        return `${this.file.name}, ${this.convertBytesToKB(this.file.size) }kb`;
    }

    allowFileSize(): boolean {
        const maxSize = 1024 * 5;
        const convertedSize = this.convertBytesToKB(this.file.size);
        return convertedSize <= maxSize;
    }

}
