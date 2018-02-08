import * as React from 'react';
import { connect } from 'react-redux';
import { City as CityModel } from 'City/model';
import { MapSelector } from 'Map/selector';
import { CitySVG } from 'Assets/component';

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

class CityPure extends React.Component<Props, State> {

  render() {
    return this.props.city &&
      <CitySVG x={this.props.x} y={ this.props.y }/>
  }
}

export const City = connect(mapStateToProps)(CityPure);