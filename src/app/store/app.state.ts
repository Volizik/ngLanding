import {IUser} from '../interfaces';

export interface AppState {
    appState: {
        usersList: IUser[],
        token: string
    };
}
