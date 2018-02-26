import * as React from 'react';
import { getIsoTranslate } from 'Isometric/utils';

type Props = {
  x: number,
  y: number,
  onClick?: () => void,
  style?: any
};

export const IsoSVG: React.SFC<Props> = (props) =>
  <g
    onClick={ props.onClick }
    transform={ getIsoTranslate(props.x, props.y) }
    style={ props.style }
  >
    { props.children}
  </g>;