import * as React from 'react';

type Props = {
  x: number,
  y: number
};

export const CitySVG: React.SFC<Props> = (props) => {

  return (
    <g transform={` translate(${ props.x }, ${ props.y })`}>

      <circle transform={`scale(2, 1)`} cx='0' cy='16' r='5' fill='black' fillOpacity={ 1 }/>

      <line x1="0" y1="-36" x2="92" y2="16"
            style={{ stroke: 'red' }} />

      <line x1="92" y1="16" x2="0" y2="64"
            style={{ stroke: 'red' }} />

      <line x1="0" y1="64" x2="-92" y2="16"
            style={{ stroke: 'red' }} />

      <line x1="-92" y1="16" x2="0" y2="-36"
            style={{ stroke: 'red' }} />

    </g>
  );
};
