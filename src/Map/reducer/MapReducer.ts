import { combineReducers, Reducer } from 'redux';
import { handleAction } from 'redux-actions';
import { MapState } from '../state/MapState';
import { MapAction } from '../action/MapAction';

const initMapReducer: Reducer<any> = (state, action) => action.size;
const setTilesReducer: Reducer<any> = (state, action) => action.tiles;
const setZoomReducer: Reducer<any> = (state, action) => action.zoom;

const setPanReducer: Reducer<any> = (state, action) => {
  return ({
    x: action.x,
    y: action.y
  });
};

export const mapReducers = combineReducers<MapState.Type>({
  size: handleAction(MapAction.INIT_MAP, initMapReducer, MapState.Initial.size),
  tiles: handleAction(MapAction.SET_TILES, setTilesReducer, MapState.Initial.tiles),
  zoom: handleAction(MapAction.SET_ZOOM, setZoomReducer, MapState.Initial.zoom),
  pan: handleAction(MapAction.SET_PAN, setPanReducer, MapState.Initial.pan)
});