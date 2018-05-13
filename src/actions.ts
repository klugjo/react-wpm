import {IAction} from './types';

export const LIST_OF_QUOTES_RECEIVED = 'LIST_OF_QUOTES_RECEIVED';
export const LIST_OF_QUOTES_FAILED = 'LIST_OF_QUOTES_FAILED';

export const requestListOfQuotes = (): IAction => ({
    type: LIST_OF_QUOTES_RECEIVED,
    payload: {quotes: ['quote 1', 'quote 2']} 
});
