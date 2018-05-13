import * as actions from './actions';
import {IAction, IAppState} from './types';

export const defaultState: IAppState = {
    quotes: ['default 1', 'default 2'],
    error: ''
};

export const mainReducer = (state: IAppState = defaultState, action: IAction): IAppState => {
    switch (action.type) {
        case actions.LIST_OF_QUOTES_RECEIVED:
            return {...state, quotes: action.payload.quotes};
        case actions.LIST_OF_QUOTES_FAILED:
            return {...state, error: 'An error occured'};
    }
    return state;
}
