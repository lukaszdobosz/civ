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
    this.props.initMap(20, 20);
  }

  render() {
    return (
      <Svg
        width='100%'
        height='100%'
        viewBox={`0 0 2000 1200`}
        xmlns="http://www.w3.org/2000/svg"
        transform={`scale(2)`}>
        <Map />
      </Svg>
    );
  }
}

export const Game = connect(null, mapDispatchToProps)(GamePure);