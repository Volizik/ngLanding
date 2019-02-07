import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';

import {SharedService} from '../../services/shared.service';
import {IUser} from '../../interfaces';

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
export class MenuComponent implements OnInit, OnDestroy {

    @Input() currentState;
    private userSubscription: Subscription;
    public userData: IUser = {
        email: '',
        name: '',
        id: '',
        phone: '',
        photo: '',
        position: '',
        position_ad: ''
    };

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.userSubscription = this.sharedService.getCurrentUserData().subscribe(data => {
            this.userData = data.user;
        });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

}
