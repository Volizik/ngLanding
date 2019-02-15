import { Action } from '@ngrx/store';
import { IUser } from '../interfaces';

export enum ActionTypes {
    LoadUsersList = 'LoadUsersList',
    LoadMoreUsers = 'LoadMoreUsers',
    SetToken = 'SetToken'
}

export class LoadUsersList implements Action {
    readonly type = ActionTypes.LoadUsersList;

    constructor(public payload: IUser[]) {}
}

export class LoadMoreUsers implements Action {
    readonly type = ActionTypes.LoadMoreUsers;

    constructor(public payload: IUser[]) {}
}

export class SetToken implements Action {
    readonly type = ActionTypes.SetToken;

    constructor(public payload: string) {}
}

export type AppActions = LoadUsersList | LoadMoreUsers | SetToken;
