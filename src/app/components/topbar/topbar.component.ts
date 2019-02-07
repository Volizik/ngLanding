import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

    public menuState;

    constructor() {
    }

    ngOnInit() {
    }

    showMenu(): void {
        this.menuState = 'show';
    }

    hideMenu(): void {
        this.menuState = 'hide';
    }

    // Что-бы не ломался топбар при ресайзе - обнуляем переменную menuState
    @HostListener('window:resize')
    onResize() {
        if (this.menuState) {
            this.menuState = null;
        }
    }
}
