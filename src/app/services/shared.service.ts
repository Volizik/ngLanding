import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IPositionsResponse, IUserResponse, IUsersResponse} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {
  }

  getCurrentUserData(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${environment.api_url}/users/1`);
  }

  getPositions(): Observable<IPositionsResponse> {
    return this.http.get<IPositionsResponse>(`${environment.api_url}/positions`);
  }

  getUsers(page: number = 1, count: number = 6): Observable<IUsersResponse> {
      const params = new HttpParams().set('page', `${page}`).set('count', `${count}`);
      return this.http.get<IUsersResponse>(`${environment.api_url}/users`, {params: params});
  }

}