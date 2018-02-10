import * as React from 'react';
import { IsoSVG } from 'Isometric/component';
import { TileType } from 'Tile/model';

type Props = {
  x: number,
  y: number,
  tileType: TileType
};

export const MountainSVG: React.SFC<Props> = (props) => {

  const mountainColors = {
    [TileType.GRASS]: {
      main: '#aaa',
      shadow: '#888',
      peakMain: '#eef',
      peakShadow: '#ccd'
    },
    [TileType.SAND]: {
      main: '#ccbb3b',
      shadow: '#aa9933',
      peakMain: '#ccbb3b',
      peakShadow: '#aa9933'
    },
    [TileType.SNOW]: {
      main: '#bbddee',
      shadow: '#aaccdd',
      peakMain: '#bbddee',
      peakShadow: '#aaccdd'
    },
  };

  return (
    <IsoSVG x={ props.x } y={ props.y }>
      <g transform={`scale(10) translate(-3, -2.2)`}>
      <path
        style={{ fill: mountainColors[props.tileType].main }}
        d={`M 3, 0 L 3, 6 0, 4 Z `}/>
      <path
        style={{ fill: mountainColors[props.tileType].shadow }}
        d={`M 3, 0 L 2.9, 6 6, 4 Z `}/>

      <path
        style={{ fill: mountainColors[props.tileType].peakMain }}
        d={`M 3, 0 L 3, 3 1.5, 2 Z `}/>

      <path
        style={{ fill: mountainColors[props.tileType].peakShadow }}
        d={`M 3, 0 L 3, 3 4.5, 2 Z `}/>
      </g>
    </IsoSVG>
  );
};
