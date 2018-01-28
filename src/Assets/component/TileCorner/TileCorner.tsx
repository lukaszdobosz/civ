import * as React from 'react';

import { Rect } from './TileCorner.s';
import { ISO_FACTOR } from 'Isometric/const';

export const TileCorner = (props) => {

  const TILE_WIDTH = 36;
  const TILE_HEIGHT = 36 * ISO_FACTOR;

  const x = TILE_HEIGHT * (props.x - props.y);
  const y = (props.x + props.y ) * TILE_WIDTH / 2;

  return <g xmlns="http://www.w3.org/2000/svg"
     width={ TILE_WIDTH}
     height={ TILE_HEIGHT }
     transform={` translate(${ x }, ${ y })`}
  >

    <Rect
      fill={'green'}
      stroke='green'
      width={ TILE_WIDTH}
      height={ TILE_HEIGHT }
      x={0}
      y={0}
      onClick={props.onClick}
      transform={'rotate(30) skewX(-30)'}
    />

    {props.xCorner && <rect
      fill={'#775522'}
      stroke={'#775522'}
      width={ TILE_WIDTH}
      height={ TILE_HEIGHT }
      x={0}
      y={ TILE_HEIGHT }
      transform={`rotate(${ -30 }) skewX(-30)`}
    />
    }
    {props.yCorner &&
      <rect
        fill={'#aa8822'}
        stroke={'#aa8822'}
        width={TILE_WIDTH}
        height={TILE_HEIGHT}
        x={-TILE_WIDTH}
        y={TILE_HEIGHT}
        transform={`rotate(${ 30 }) skewX(30)`}
      />
    }
    {/* <g transform={``}>





    </g>*/}
    {/* <rect
      fill={'#775522'}
      stroke={'#775522'}
      width={50}
      height={ TILE_HEIGHT }
      x="51"
      y={- TILE_WIDTH}
      transform={`matrix(${ Math.sqrt(2) / 2 }, ${ Math.sqrt(2) / 2 },0,1,0,0) `}/>*/}
  </g>;
}