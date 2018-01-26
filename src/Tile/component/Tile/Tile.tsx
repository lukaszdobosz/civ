import * as React from 'react';
import { connect } from 'react-redux';
import { Tile as TileModel } from 'Tile/model';
import { MapSelector } from 'Map/selector';
import { Rect } from './Tile.s';
import { Resource } from 'Resource/component';

const TILE_SIZE = 80;

type StateProps = {
  tile: TileModel
}

type DispatchProps = {}

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
    const { tile, x, y } = this.props;

    console.log('tile', this.props.tile);

    const colors = [ 'red', 'green', 'teal', 'cyan' ];

    return (
      <g>
        <Rect
          x={x * TILE_SIZE}
          y={y * TILE_SIZE}
          width={TILE_SIZE}
          height={TILE_SIZE}
          fill={colors[ tile.type ]}
          onClick={() => this.handleClick()}
        />

        { tile.resource &&
          <Resource
            resource={ tile.resource }
            tileX={ x * TILE_SIZE }
            tileY={ y * TILE_SIZE }
          />
        }

      </g>
    );
  }

  handleClick() {
    console.log('clicked', this.props.x, this.props.y);
  }
}

export const Tile = connect(mapStateToProps)(TilePure);