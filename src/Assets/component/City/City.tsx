import * as React from 'react';

type Props = { };

export const City: React.SFC<Props> = (props) => {

  return (
    <g>

      <circle transform={`scale(2, 1)`} cx='0' cy='0' r='5' fill='black' fillOpacity={ 1 }/>

    </g>
  );
};
