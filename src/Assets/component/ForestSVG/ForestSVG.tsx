import * as React from 'react';
import { TreeSVG } from '../TreeSVG';
import { TileType } from 'Tile/model';
import { IsoSVG } from 'Isometric/component';

type Props = {
  x: number,
  y: number,
  tileType: TileType,
};


export const ForestSVG: React.SFC<Props> = (props: Props) => {

  return (
   <IsoSVG x={ props.x } y={ props.y } style={{ pointerEvents: 'none' }}>
     <TreeSVG tileType={props.tileType} transform={`scale(.8) translate(${ -10 }, ${ -15 })`}/>
     <TreeSVG tileType={props.tileType} transform={`scale(.7) translate(${ -25 }, ${ 0 })`}/>
     <TreeSVG tileType={props.tileType} transform={`scale(.6) translate(${ -0 }, ${ 0 })`}/>
   </IsoSVG>
  );

};
