import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

    @Input() type: 'text' | 'password' | 'email' | 'phone' = 'text';
    @Input() name = '';
    @Input() placeholder = '';
    @Input() mask = '';
    @Input() prefix = '';
    @Input() showMaskTyped = true;

    constructor() {
    }

    ngOnInit() {
    }

}
