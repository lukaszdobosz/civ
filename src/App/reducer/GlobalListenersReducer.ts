
import { combineReducers, Reducer } from 'redux';
import { handleActions } from 'redux-actions';
import { GlobalListenersAction } from '../action';
import { GlobalListenersState } from '../state';

const setKeyDownCodeReducer: Reducer<any> = (state, action) => !state.includes(action.keyCode) ? state.push(action.keyCode) : state;

const clearKeyDownReducer: Reducer<any> = (state, action) => state.filter(keyCode => keyCode !== action.keyCode);

export const globalListenersReducers = combineReducers<GlobalListenersState.Type>({
  pressedKeysCode: handleActions(
    {
      [GlobalListenersAction.SET_PRESSED_KEY_CODE]: setKeyDownCodeReducer,
      [GlobalListenersAction.CLEAR_PRESSED_KEY_CODE]: clearKeyDownReducer,
    },
    GlobalListenersState.Initial.pressedKeysCode)
});