import * as React from 'react';
import { connect } from 'react-redux';
import { MapSelector } from 'Map/selector';
import { MountainSVG } from 'Assets/component';
import { TileType } from 'Tile/model';

type StateProps = {
  hasMountain: boolean
  tileType: TileType
};

type DispatchProps = {};

type Props = StateProps & DispatchProps & {
  x: number,
  y: number
};

type State = {};

const mapStateToProps = (state, ownProps): StateProps => ({
  hasMountain: MapSelector.selectHasMountain(ownProps.x, ownProps.y)(state),
  tileType: MapSelector.selectTileType(ownProps.x, ownProps.y)(state),
});

class MountainPure extends React.Component<Props, State> {

  render() {
    return (
      this.props.hasMountain ?
        <MountainSVG x={this.props.x} y={this.props.y} tileType={ this.props.tileType }/> : null
    );
  }
}

export const Mountain = connect(mapStateToProps)(MountainPure);