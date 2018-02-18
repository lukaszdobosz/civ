import * as React from 'react';
import { getIsoTranslate } from 'Isometric/utils';

type Props = {
  x: number,
  y: number,
  style?: any
};

export const IsoSVG: React.SFC<Props> = (props) =>
  <g transform={ getIsoTranslate(props.x, props.y) } style={ props.style }>
    { props.children}
  </g>;