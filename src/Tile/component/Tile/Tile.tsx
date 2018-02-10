import * as React from 'react';
import { connect } from 'react-redux';
import { Tile as TileModel } from 'Tile/model';
import { MapSelector } from 'Map/selector';
import { TileSVG } from 'Assets/component';
import { TileWrapper } from './Tile.s';

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

class TilePure extends React.Component<Props, State> {

  render() {
    const { tile } = this.props;

    return (
      <TileWrapper>
        <TileSVG
          type={tile.type}
          x={this.props.x}
          y={this.props.y}
          xCorner={this.props.xCorner}
          yCorner={this.props.yCorner}
          onClick={() => this.handleClick()}
        />
      </TileWrapper>
    );
  }

  handleClick() {
    console.log('tile: ', this.props.x, this.props.y, this.props.tile);
  }
}

export const Tile = connect(mapStateToProps)(TilePure);