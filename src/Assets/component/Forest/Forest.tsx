import * as React from 'react';
import { Tree } from '../Tree';

export const Forest: React.SFC<{}> = (props) => {

  return (
   <g>
     <Tree transform={`scale(.8) translate(${ -10 }, ${ -15 })`}/>
     <Tree transform={`scale(.7) translate(${ -25 }, ${ 0 })`}/>
     <Tree transform={`scale(.6) translate(${ -0 }, ${ 0 })`}/>
   </g>
  )

};
