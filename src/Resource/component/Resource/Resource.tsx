import * as React from 'react';
import { Rect } from './Resource.s';


type StateProps = { }

type DispatchProps = {}

type Props = StateProps & DispatchProps & {
  resource: number,
  tileX: number,
  tileY: number
};

type State = {};

export class Resource extends React.Component<Props, State> {

  render() {
    const { resource, tileX, tileY } = this.props;


    const colors2 = [ '', 'yellow', 'pink', 'magenta' ];

    return (
      <Rect
        x={tileX + 30}
        y={tileY + 30}
        width={30}
        height={30}
        fill={ colors2[ resource ] }
      />
    );
  }

  handleClick() {
    console.log('clicked', this.props.resource);
  }
}