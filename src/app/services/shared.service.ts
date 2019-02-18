import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {IPositionsResponse, IUserResponse, IUsersResponse} from '../interfaces';
import {AppState} from '../store/app.state';
import {SetToken} from '../store/app.actions';

@Injectable({
    providedIn: 'root'
})
export class SharedService implements OnDestroy {

    private token = '';
    private alive: boolean;

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.alive = true;
    }

    getCurrentUserData(): Observable<IUserResponse> {
        return this.http.get<IUserResponse>(`${environment.api_url}/users/1`);
    }

    getPositions(): Observable<IPositionsResponse> {
        return this.http.get<IPositionsResponse>(`${environment.api_url}/positions`);
    }

    getUsers(page: number = 1): Observable<IUsersResponse> {
        const count = window.innerWidth > 767 ? 6 : 3; // Для моб устройств выводить по три пользователя
        const params = new HttpParams().set('page', `${page}`).set('count', `${count}`);
        return this.http.get<IUsersResponse>(`${environment.api_url}/users`, {params: params});
    }

    getToken(): void {
        this.http.get(`${environment.api_url}/token`)
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
                this.token = data['token'];
                this.store.dispatch(new SetToken(data['token'])); // Сохраняем токен в стор
            });
    }

    registerUser(data: FormData): Observable<object> {
        return this.http.post(`${environment.api_url}/users`, data, {headers: {'Token': this.token}});
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}
