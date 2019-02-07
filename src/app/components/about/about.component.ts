import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    scrollToSignUp() {
        document.querySelector('#signup').scrollIntoView({ behavior: 'smooth' });
    }

}
