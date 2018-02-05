import * as React from 'react';
import { connect } from 'react-redux';
import { MapAction } from 'Map/action';
import { Map } from 'Map/component';
import { Svg } from './Game.s';
import { MapSelector } from 'Map/selector';

type StateProps = {
  zoom: number
};

type DispatchProps = {
  initMap: (size: number) => void
};

type Props = StateProps & DispatchProps & {};
type State = {};

const mapStateToProps = (state): StateProps => ({
  zoom: MapSelector.selectZoom(state)
});

const mapDispatchToProps = (dispatch) => ({
  initMap: (size) => dispatch(MapAction.initMap(size))
});

class GamePure extends React.Component<Props, State> {

  componentWillMount() {
    this.props.initMap(20);
  }

  render() {
    return (
      <Svg
        width='100%'
        height='100%'
        viewBox={`0 0 2000 1200`}
        xmlns='http://www.w3.org/2000/svg'
        transform={`scale(${ this.props.zoom })`}
      >
        <Map />
      </Svg>
    );
  }
}

export const Game = connect(mapStateToProps, mapDispatchToProps)(GamePure);