import React from 'react';
import{PlatformStyled} from './styles';

export const Platform = () => {
  return (
    // <PlatformContainer
    //   width={150}
    //   height={30}
    //   color={'white'}
    // >
      <PlatformStyled
        bottom={0}
        width={150}
        height={30}
        left={0}
        src={`./assets/platforms/platform1.png`}
      /> 
    // </PlatformContainer>
  );
}

