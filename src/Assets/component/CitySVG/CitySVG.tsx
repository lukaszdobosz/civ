import * as React from 'react';
import { TILE_WIDTH } from 'Tile/const';

type Props = {
  x: number,
  y: number
};

export const CitySVG: React.SFC<Props> = (props) => {

  return (
    <g transform={` translate(${ props.x }, ${ props.y })`}>

      <circle transform={`scale(2, 1)`} cx='0' cy='16' r='5' fill='black' fillOpacity={ 1 }/>

      <line x1="0" y1={ -TILE_WIDTH } x2={ TILE_WIDTH * 2.5 } y2={ TILE_WIDTH / 2 }
            style={{ stroke: 'red' }} />

      <line x1={ TILE_WIDTH * 2.5 } y1={ TILE_WIDTH / 2} x2="0" y2={ TILE_WIDTH * 2 }
            style={{ stroke: 'red' }} />

      <line x1="0" y1={ TILE_WIDTH * 2 } x2={ -TILE_WIDTH * 2.5 } y2={ TILE_WIDTH / 2 }
            style={{ stroke: 'red' }} />

      <line x1={ -TILE_WIDTH * 2.5 } y1={ TILE_WIDTH / 2 } x2="0" y2={ -TILE_WIDTH }
            style={{ stroke: 'red' }} />

    </g>
  );
};
