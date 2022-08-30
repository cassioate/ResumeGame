import React, { useEffect, useState } from 'react';
import{HitBoxPlatform, PlatformImgStyled} from './styles';

interface PropsPlatform {
  bottom: number;
  width: number;
  height: number;
  left: number;
  img: string;
}

export const Platform = ({bottom, width, height, left, img}: PropsPlatform) => {

  return (
    <HitBoxPlatform
      id='HitBoxPlatform'
      bottom={bottom}
      width={width}
      height={height}
      left={left}
    >
      <PlatformImgStyled
        id='PlatformImg'
        width={width+5}
        height={height+2}
        src={img}
      /> 
    </HitBoxPlatform>
  );
}

