
import { combineReducers, Reducer } from 'redux';
import { handleAction } from 'redux-actions';
import { MapState } from '../state/MapState';
import { MapAction } from '../action/MapAction';

const initMapReducer: Reducer<any> = (state, action) => ({ width: action.width, height: action.height });
const setTilesReducer: Reducer<any> = (state, action) => action.tiles;

export const mapReducers = combineReducers<MapState.Type>({
  size: handleAction(MapAction.INIT_MAP, initMapReducer, MapState.Initial.size),
  tiles: handleAction(MapAction.SET_TILES, setTilesReducer, MapState.Initial.tiles)
});