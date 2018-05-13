import {createStore} from 'redux';

import {defaultState, mainReducer} from './reducer';
import {IAction, IAppState} from './types';

const store = createStore<IAppState, IAction, {}, {}>(mainReducer, defaultState);

export default store;
