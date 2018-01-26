import * as React from 'react';
import { connect } from 'react-redux';
import { Tile as TileModel } from 'Tile/model';
import { MapSelector } from 'Map/selector';
import { Rect } from './Tile.s';

const TILE_SIZE = 80;

type StateProps = {
  tile: TileModel
}

type DispatchProps = { }

type Props = StateProps & DispatchProps & {
  x: number,
  y: number
};

type State = {};

const mapStateToProps = (state, ownProps): State => ({
  tile: MapSelector.selectTile(ownProps.x, ownProps.y)(state),
});

class TilePure extends React.Component<Props, State> {

  render() {

    console.log('tile', this.props.tile);

    const colors = ['red', 'green', 'teal', 'cyan'];

    return (
    <Rect
      x={ this.props.x * TILE_SIZE }
      y={ this.props.y * TILE_SIZE }
      width={ TILE_SIZE }
      height={ TILE_SIZE }
      stroke="none"
      fill={ colors[this.props.tile.type] }
      fillOpacity="0.5"
      strokeOpacity="0.8"
      onClick={ () => this.handleClick() }
    >
    </Rect>

    );
  }

  handleClick() {
    console.log('clicked', this.props.x, this.props.y);
  }
}


export const Tile = connect(mapStateToProps)(TilePure);