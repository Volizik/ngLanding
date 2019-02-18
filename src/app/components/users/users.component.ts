import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {takeWhile} from 'rxjs/operators';

import {SharedService} from '../../services/shared.service';
import {IUser} from '../../interfaces';
import {AppState} from '../../store/app.state';
import {LoadUsersList, LoadMoreUsers} from '../../store/app.actions';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit, OnDestroy {

    @ViewChild('showMoreButton') showMoreButton: ElementRef;
    public usersList: IUser[];
    public counter = 1;
    private alive: boolean;

    constructor(private sharedService: SharedService, private store: Store<AppState>) {
        this.alive = true;
        this.store
            .pipe(
                takeWhile(() => this.alive),
                select((state: AppState) => state.appState.usersList)
            )
            .subscribe((users: IUser[]) => this.usersList = users);
    }

    ngOnInit() {
        this.sharedService
            .getUsers()
            .subscribe((res) => {
                this.store.dispatch(new LoadUsersList(res.users));
            });
    }

    getUsers(event) {
        this.counter++;
        this.sharedService.getUsers(this.counter)
            .pipe(takeWhile(() => this.alive))
            .subscribe(
                res => {
                    this.store.dispatch(new LoadMoreUsers(res.users));
                    if (res.total_pages === res.page) { // Если запрашиваемая страница последняя - блокируем кнопку
                        event.target.setAttribute('disabled', 'disabled');
                    }
                },
                error => {
                    console.log('err', error);
                }
            );
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}
