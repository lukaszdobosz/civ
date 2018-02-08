import * as React from 'react';

import { TILE_WIDTH, TILE_HEIGHT } from 'Tile/const';
import { IsoSVG } from 'Isometric/component';

const colors = [
  '#337788',
  '#77b200',
  '#bbb200',
  '#ddeeff'
];

export const TileSVG = (props) => {

  return (
    <IsoSVG x={ props.x } y={ props.y }>
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
    </IsoSVG>
  );
};
