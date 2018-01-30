import * as React from 'react';

type Props = {
  transform: string
}

export const Tree: React.SFC<Props> = (props) => {

  return (
    <g transform={ props.transform }>

      <circle transform={`scale(2, 1)`} cx="6" cy="30" r="5" fill="black" fillOpacity={ .2 }/>

      <g transform={ `scale(2)` }>
        <path
          style={{ fill: '#33883b' }}
          d={ "M 3, 0 L 0, 10 3, 13 Z "}
        />
        <path
          style={{ fill: '#1a6433' }}
          d={ "M 3, 0 L 6, 10 3, 13 Z "}
        />

        <path
          style={{ fill: '#676a59' }}
          d={ "M 2, 12 L 2, 14 3, 15 3,13  Z "}
        />

        <path
          style={{ fill: '#454837' }}
          d={ "M 4, 12 L 4, 14 3, 15 3, 13  Z "}
        />

      </g>
    </g>
  );
};
