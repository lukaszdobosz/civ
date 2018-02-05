import * as React from 'react';
import { connect } from 'react-redux';
import { Rect } from './Resource.s';
import { MapSelector } from 'Map/selector';
import { Resource as ResourceModel } from 'Resource/model';
import { ISO_FACTOR } from 'Isometric/const';

type StateProps = {
  resource: ResourceModel
};

type DispatchProps = {};

type Props = StateProps & DispatchProps & {
  x: number,
  y: number
};

type State = {};

const TILE_WIDTH = 36;
const TILE_HEIGHT = 36 * ISO_FACTOR;

const mapStateToProps = (state, ownProps): StateProps => ({
  resource: MapSelector.selectResource(ownProps.x, ownProps.y)(state),
});

class ResourcePure extends React.Component<Props, State> {

  render() {
    const { resource, x, y } = this.props;

    const colors2 = [ '', 'yellow', 'pink', 'magenta' ];

    return ( resource ? (
        <g>
          <Rect
            x={(x * TILE_WIDTH) + 10}
            y={(y * TILE_HEIGHT) + 10}
            width={15}
            height={15}
            fill={colors2[ resource.type ]}
            onClick={() => this.handleClick()}
          />
        </g>
      ) : null
    );
  }

  handleClick() {
    console.log('resource: ', this.props.x, this.props.y);
  }
}

export const Resource = connect(mapStateToProps)(ResourcePure);