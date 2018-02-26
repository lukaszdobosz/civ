import * as React from 'react';
import { connect } from 'react-redux';
import { MapAction } from 'Map/action';
import { Map } from 'Map/component';
import { Svg } from './Game.s';
import { MapSelector } from 'Map/selector';
import { TILE_WIDTH } from 'Tile/const';

import { select, event } from 'd3-selection'
import { zoom, zoomIdentity } from 'd3-zoom'
import { MAP_SIZE } from '../../const';

type StateProps = {
  zoom: number,
  viewBox: string
};

type DispatchProps = {
  initMap: (size: number) => void
  setZoom: (zoom: number) => void
  setPan: (x: number, y: number) => void
};

type Props = StateProps & DispatchProps & {};
type State = {
  transform: any
};

const mapStateToProps = (state): StateProps => ({
  zoom: MapSelector.selectZoom(state),
  viewBox: MapSelector.selectViewBox(TILE_WIDTH)(state)
});

const mapDispatchToProps = (dispatch) => ({
  initMap: (size) => dispatch(MapAction.initMap(size)),
  setZoom: (zoom) => dispatch(MapAction.setZoom(zoom)),
  setPan: (x, y) => dispatch(MapAction.setPan(x, y))
});

class GamePure extends React.Component<Props, State> {

  private node;

  constructor(props) {
    super(props);

    this.state = {
      transform: null
    }
  }

  componentWillMount() {
    this.props.initMap(MAP_SIZE);
  }

  zoom() {
    this.props.setZoom(event.transform.k);
    this.props.setPan(event.transform.x, event.transform.y);

    this.setState({ transform: event.transform });
  }

  componentDidMount() {
    const transform = zoomIdentity.translate(window.innerWidth / 2, (window.innerHeight - (MAP_SIZE * TILE_WIDTH)) / 2).scale(1);

    const zoom2 =
      zoom()
      .scaleExtent([ 1, 20 ])
      .on('zoom', () => this.zoom());

    select('svg')
    .attr('fill', 'none')
    .attr('pointer-events', 'all')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight)
    .call(zoom2)
    .call(zoom2.transform, transform)
  }

  render() {
    return (
      <Svg
        ref={node => this.node = node}
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'

      >
        <g transform={this.state.transform}>
          <Map/>
        </g>
      </Svg>
    );
  }
}

export const Game = connect(mapStateToProps, mapDispatchToProps)(GamePure);