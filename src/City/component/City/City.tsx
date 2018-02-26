import * as React from 'react';
import { connect } from 'react-redux';
import { City as CityModel } from 'City/model';
import { MapSelector } from 'Map/selector';
import { CitySelector } from 'City/selector';
import { CitySVG } from 'Assets/component';

type StateProps = {
  city: CityModel,
  isDetailedView: boolean
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
  isDetailedView: CitySelector.selectIsDetailedView(ownProps.x, ownProps.y)(state)
});

class CityPure extends React.Component<Props, State> {

  render() {
    return this.props.city &&
      <CitySVG
        x={this.props.x}
        y={ this.props.y }
        isDetailedView={ this.props.isDetailedView }
        onClick={ () => this.handleCityClick() }
      />
  }

  handleCityClick() {
  }
}

export const City = connect(mapStateToProps)(CityPure);