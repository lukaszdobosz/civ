import * as React from 'react';
import { connect } from 'react-redux';
import { Tile as TileModel, TileType } from 'Tile/model';
import { MapSelector } from 'Map/selector';
import { TileCorner, Mountain, Forest, City } from 'Assets/component';
import { ISO_FACTOR } from 'Isometric/const';
import { TileWrapper } from './Tile.s';
import { ResourceType } from 'Resource/model';

type StateProps = {
  tile: TileModel
};

type DispatchProps = {};

type Props = StateProps & DispatchProps & {
  x: number,
  y: number,
  xCorner: boolean,
  yCorner: boolean,
};

type State = {};

const mapStateToProps = (state, ownProps): StateProps => ({
  tile: MapSelector.selectTile(ownProps.x, ownProps.y)(state),
});

const TILE_WIDTH = 36;
const TILE_HEIGHT = 36 * ISO_FACTOR;

class TilePure extends React.Component<Props, State> {

  render() {
    const { tile } = this.props;

    const x = TILE_HEIGHT * (this.props.x - this.props.y);
    const y = (this.props.x + this.props.y ) * TILE_WIDTH / 2;

    return (
      <TileWrapper transform={` translate(${ x }, ${ y })`}>
        {tile.type === TileType.MOUNTAIN ?
          <Mountain/> :
          <TileCorner
            type={tile.type}
            xCorner={this.props.xCorner}
            yCorner={this.props.yCorner}
            onClick={() => this.handleClick()}
          />
        }

        {tile.resource && tile.resource.type === ResourceType.FOREST && <Forest/>}
        {tile.city && <City />}
      </TileWrapper>
    );
  }

  handleClick() {
    console.log('tile: ', this.props.x, this.props.y, this.props.tile.type);
  }
}

export const Tile = connect(mapStateToProps)(TilePure);