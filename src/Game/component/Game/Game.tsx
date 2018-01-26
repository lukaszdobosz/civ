import * as React from 'react';
import { connect } from 'react-redux';
import { MapAction } from 'Map/action';
import { Map } from 'Map/component';
import { Svg } from './Game.s';


type DispatchProps = {
  initMap: (width: number, height: number) => void
}

type Props = DispatchProps & {};
type State = {};

const mapDispatchToProps = (dispatch) => ({
  initMap: (width, height) => dispatch(MapAction.initMap(width, height))
});

class GamePure extends React.Component<Props, State> {

  componentWillMount() {
    this.props.initMap(10, 10);
  }

  render() {
    return (
      <Svg width='100%' height='100%'>
        <Map />
      </Svg>
    );
  }
}

export const Game = connect(null, mapDispatchToProps)(GamePure);