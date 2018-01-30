import * as React from 'react';

type Props = {
};

export const Mountain: React.SFC<Props> = (props) => {

  return (
    <g transform={`scale(10) translate(-3, -2.2)`}>
      <path
        style={{ fill: '#aaa' }}
        d={`M 3, 0 L 3, 6 0, 4 Z `}/>
      <path
        style={{ fill: '#888' }}
        d={`M 3, 0 L 2.9, 6 6, 4 Z `}/>

      <path
        style={{ fill: '#bbb' }}
        d={`M 3, 0 L 3, 3 1.5, 2 Z `}/>

      <path
        style={{ fill: '#999' }}
        d={`M 3, 0 L 3, 3 4.5, 2 Z `}/>
    </g>
  );
};
