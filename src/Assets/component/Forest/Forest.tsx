import * as React from 'react';
import { Tree } from '../Tree';
import { TileType } from 'Tile/model';

type Props = {
  tileType: TileType
};


export const Forest: React.SFC<Props> = (props: Props) => {

  return (
   <g>
     <Tree tileType={props.tileType} transform={`scale(.8) translate(${ -10 }, ${ -15 })`}/>
     <Tree tileType={props.tileType} transform={`scale(.7) translate(${ -25 }, ${ 0 })`}/>
     <Tree tileType={props.tileType} transform={`scale(.6) translate(${ -0 }, ${ 0 })`}/>
   </g>
  );

};
