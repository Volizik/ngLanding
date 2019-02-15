import {ActionTypes, AppActions} from './app.actions';

export const initialState = {
    usersList: [],
    token: ''
};

export function appReducer(state = initialState, action: AppActions) {
    switch (action.type) {
        case ActionTypes.LoadUsersList:
            return {
                ...state,
                usersList: action.payload
            };

        case ActionTypes.LoadMoreUsers:
            return {
                ...state,
                usersList: [...state.usersList, ...action.payload]
            };

        case ActionTypes.SetToken:
            return {
                ...state,
                token: action.payload
            };

        default:
            return state;
    }
}
