import * as React from 'react';
import { connect } from 'react-redux';
import { MapAction } from 'Map/action';
import { MapSelector } from 'Map/selector';
import { MapState } from 'Map/State';
import { Tile } from 'Tile/component';
import { MapWrapper } from './Map.s';
import { generateTiles } from 'Map/generator';

type StateProps = {
  size: MapState.Size
}

type DispatchProps = {
  setTiles: (tiles) => void
}

type Props = StateProps & DispatchProps & {};
type State = {};

const mapStateToProps = (state): StateProps => ({
  size: MapSelector.selectSize(state)
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  setTiles: (tiles) => dispatch(MapAction.setTiles(tiles))
});

class MapPure extends React.Component<Props, State> {

  componentWillMount() {
    this.props.setTiles(generateTiles(this.props.size));
  }

  renderMap() {
    const map = [];

    for ( let x = 0; x < this.props.size.width; x++) {
      map[x] = [];

      for ( let y = 0; y < this.props.size.height; y++) {
        map[x][y] =
          <Tile
            key={ `${ x }-${ y }` }
            x={ x }
            y={ y }
          />;
      }
    }

    return map;
  }

  render() {
    return <MapWrapper>
      { this.renderMap() }
    </MapWrapper>
  }
}


export const Map = connect(mapStateToProps, mapDispatchToProps)(MapPure);