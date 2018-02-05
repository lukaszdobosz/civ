import * as React from 'react';

import { ISO_FACTOR } from 'Isometric/const';

const colors = [
  '#337788',
  '#77b200',
  '#bbb200',
  '#ddeeff'
];

export const TileCorner = (props) => {

  const TILE_WIDTH = 36;
  const TILE_HEIGHT = 36 * ISO_FACTOR;

  return (
    <g xmlns='http://www.w3.org/2000/svg'
       width={TILE_WIDTH}
       height={TILE_HEIGHT}
    >

      <rect
        fill={colors[ props.type ]}
        stroke={colors[ props.type ]}
        width={TILE_WIDTH}
        height={TILE_HEIGHT}
        x={0}
        y={0}
        onClick={props.onClick}
        transform={'rotate(30) skewX(-30)'}
      />

      {props.xCorner && <rect
        fill={'#775522'}
        stroke={'#775522'}
        width={TILE_WIDTH}
        height={TILE_HEIGHT}
        x={0}
        y={TILE_HEIGHT}
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
    </g>
  );
};
