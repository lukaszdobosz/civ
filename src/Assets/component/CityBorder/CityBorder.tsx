import * as React from 'react';
import { connect } from 'react-redux';
import { MapSelector } from 'Map/selector';
import { MapState } from 'Map/state';

type StateProps = {
  tiles: MapState.Tiles
}

type Props = { };

const mapStateToProps = (state, ownProps): StateProps => ({
  tiles: MapSelector.selectTiles(state),
});

export const CityBorderPure: React.SFC<Props> = (props) => {

  return (
    <g>

      <circle transform={`scale(2, 1)`} cx='0' cy='16' r='5' fill='red' fillOpacity={ .5 }/>

    </g>
  );
};

export const CityBorder = connect(mapStateToProps)(CityBorderPure);