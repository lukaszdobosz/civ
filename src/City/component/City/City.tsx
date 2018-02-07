import * as React from 'react';
import { connect } from 'react-redux';
import { City as CityModel } from 'City/model';
import { MapSelector } from 'Map/selector';
import { CitySVG } from 'Assets/component';
import { ISO_FACTOR } from 'Isometric/const';

type StateProps = {
  city: CityModel
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
  city: MapSelector.selectCity(ownProps.x, ownProps.y)(state),
});

const TILE_WIDTH = 36;
const TILE_HEIGHT = 36 * ISO_FACTOR;

class CityPure extends React.Component<Props, State> {

  render() {
    const x = TILE_HEIGHT * (this.props.x - this.props.y);
    const y = (this.props.x + this.props.y ) * TILE_WIDTH / 2;

    return this.props.city && <CitySVG x={ x } y={ y }/>
  }
}

export const City = connect(mapStateToProps)(CityPure);