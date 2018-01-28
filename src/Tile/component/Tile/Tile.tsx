import * as React from 'react';
import { connect } from 'react-redux';
import { Tile as TileModel } from 'Tile/model';
import { MapSelector } from 'Map/selector';
import { TileCorner } from 'Assets/component';

type StateProps = {
  tile: TileModel
}

type DispatchProps = {}

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
    const { tile, x, y } = this.props;

    console.log('tile', tile);


    return (
      <TileCorner
        x={ x }
        y={ y }
        xCorner={ this.props.xCorner }
        yCorner={ this.props.yCorner }
        onClick={() => this.handleClick()}
      />
    );
  }

  handleClick() {
    console.log('tile: ', this.props.x, this.props.y);
  }
}

export const Tile = connect(mapStateToProps)(TilePure);