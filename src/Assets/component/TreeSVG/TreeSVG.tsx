import * as React from 'react';
import { TileType } from 'Tile/model';

type Props = {
  transform: string
  tileType: TileType
};

export const TreeSVG: React.SFC<Props> = (props) => {

  const treeColors = {
    [TileType.GRASS]: { main: '#33883b', shadow: '#1a6433' },
    [TileType.SAND]: { main: '#ccbb3b', shadow: '#aa9933' },
    [TileType.SNOW]: { main: '#bbddee', shadow: '#aaccdd' },
    [TileType.MOUNTAIN]: { main: '#bbddee', shadow: '#aaccdd' },
  };

  return (
    <g transform={ props.transform }>

      <circle transform={`scale(2, 1)`} cx='6' cy='30' r='5' fill='black' fillOpacity={ .2 }/>

      <g transform={ `scale(2)` }>
        <path
          style={{ fill: treeColors[props.tileType].main }}
          d={ 'M 3, 0 L 0, 10 3, 13 Z '}
        />
        <path
          style={{ fill: treeColors[props.tileType].shadow }}
          d={ 'M 3, 0 L 6, 10 3, 13 Z '}
        />

        <path
          style={{ fill: '#676a59' }}
          d={ 'M 2, 12 L 2, 14 3, 15 3,13  Z '}
        />

        <path
          style={{ fill: '#454837' }}
          d={ 'M 4, 12 L 4, 14 3, 15 3, 13  Z '}
        />

      </g>
    </g>
  );
};
