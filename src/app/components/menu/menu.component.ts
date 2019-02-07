import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass'],
    animations: [
        trigger('toggleMenu', [
            state('show', style({
                transform: 'translateX(0)'
            })),
            state('hide', style({
                transform: 'translateX(-100%)'
            }))
        ]),
        trigger('toggleOverlay', [
            state('show', style({
                background: 'rgba(0, 0, 0, .5)',
                visibility: 'visible'
            })),
            state('hide', style({
                background: 'transparent',
                visibility: 'hidden'
            })),
            transition('show <=> hide', animate('300ms'))
        ])
    ]
})
export class MenuComponent implements OnInit {

    @Input() currentState;

    constructor() {
    }

    ngOnInit() {
    }

}
