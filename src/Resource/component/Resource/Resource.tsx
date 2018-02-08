import * as React from 'react';
import { connect } from 'react-redux';
import { MapSelector } from 'Map/selector';
import { Resource as ResourceModel, ResourceType } from 'Resource/model';
import { ForestSVG } from 'Assets/component';
import { TileType } from 'Tile/model';

type StateProps = {
  resource: ResourceModel
  tileType: TileType
};

type DispatchProps = {};

type Props = StateProps & DispatchProps & {
  x: number,
  y: number
};

type State = {};

const mapStateToProps = (state, ownProps): StateProps => ({
  resource: MapSelector.selectResource(ownProps.x, ownProps.y)(state),
  tileType: MapSelector.selectTileType(ownProps.x, ownProps.y)(state),
});

class ResourcePure extends React.Component<Props, State> {

  renderResource() {
    switch (this.props.resource.type) {
      case ResourceType.FOREST:   return <ForestSVG tileType={ this.props.tileType } x={ this.props.x } y={ this.props.y }/>;
      case ResourceType.GOLD:     return <text> error </text>;
    }
  }

  render() {
    return this.props.resource && this.renderResource();
  }

  handleClick() {
    console.log('resource: ', this.props.x, this.props.y);
  }
}

export const Resource = connect(mapStateToProps)(ResourcePure);