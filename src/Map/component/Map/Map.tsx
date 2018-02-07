import * as React from 'react';
import { connect } from 'react-redux';
import { MapAction } from 'Map/action';
import { MapSelector } from 'Map/selector';
import { MapState } from 'Map/State';
import { Tile } from 'Tile/component';
import { MapWrapper } from './Map.s';
import { generateTiles } from 'Map/generator';
import { Resource } from 'Resource/component';
import { City } from 'City/component';

type StateProps = {
  size: number
};

type DispatchProps = {
  setTiles: (tiles: MapState.Tiles) => void
};

type Props = StateProps & DispatchProps & {};
type State = {};

const mapStateToProps = (state): StateProps => ({
  size: MapSelector.selectSize(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  setTiles: (tiles) => dispatch(MapAction.setTiles(tiles))
});

class MapPure extends React.Component<Props, State> {

  componentWillMount() {
    this.props.setTiles(generateTiles(this.props.size));
  }

  renderTiles() {
    const tiles = [];

    for (let x = 0; x < this.props.size; x++) {
      tiles[ x ] = [];

      for (let y = 0; y < this.props.size; y++) {
        tiles[ x ][ y ] = (
          <Tile
            key={`${ x }-${ y }`}
            x={x}
            y={y}
            xCorner={x === this.props.size - 1}
            yCorner={y === this.props.size - 1}
          />
        );
      }
    }

    return tiles;
  }

  renderCities() {
    const cities = [];

    for (let x = 0; x < this.props.size; x++) {
      cities[ x ] = [];

      for (let y = 0; y < this.props.size; y++) {
        cities[ x ][ y ] = (
          <City
            key={`${ x }-${ y }`}
            x={ x }
            y={ y }
          />
        );
      }
    }

    return cities;
  }


  renderResources() {
    const resources = [];

    for (let x = 0; x < this.props.size; x++) {
      resources[ x ] = [];

      for (let y = 0; y < this.props.size; y++) {
        resources[ x ][ y ] = (
          <Resource
            key={`${ x }-${ y }`}
            x={x}
            y={y}
          />
        );
      }
    }

    return resources;
  }

  render() {
    return (
      <MapWrapper>

        {this.renderTiles()}
        {this.renderCities()}

        {/*
        { this.renderResources() }*/}

      </MapWrapper>
    );
  }
}

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapPure);