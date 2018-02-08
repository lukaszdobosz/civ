import * as React from 'react';
import { getIsoTranslate } from 'Isometric/utils';

type Props = {
  x: number,
  y: number
};

export const IsoSVG: React.SFC<Props> = (props) =>
  <g transform={ getIsoTranslate(props.x, props.y) }>
    { props.children}
  </g>;