
import { combineReducers, Reducer } from 'redux';
import { handleAction } from 'redux-actions';
import { MapState } from '../state/MapState';
import { MapAction } from '../action/MapAction';

const initMapReducer: Reducer<any> = (state, action) => action.size;
const setTilesReducer: Reducer<any> = (state, action) => action.tiles;
const setZoomReducer: Reducer<any> = (state, action) =>
  action.deltaY < 0 ?
    state < 3 ? state + (state / 10) : state :
    state > 1 ? state - (state / 10) : state;

const setPanReducer: Reducer<any> = (state, action) => {
  const nextX = state.x - action.x;
  const nextY = state.y - action.y;

  return ({
    x: Math.abs(nextX) < (window.outerWidth / 1.25) ? nextX : state.x,
    y: Math.abs(nextY) < (window.outerHeight / 1.5) ? nextY : state.y
  });
};

export const mapReducers = combineReducers<MapState.Type>({
  size: handleAction(MapAction.INIT_MAP, initMapReducer, MapState.Initial.size),
  tiles: handleAction(MapAction.SET_TILES, setTilesReducer, MapState.Initial.tiles),
  zoom: handleAction(MapAction.SET_ZOOM, setZoomReducer, MapState.Initial.zoom),
  pan: handleAction(MapAction.SET_PAN, setPanReducer, MapState.Initial.pan)
});