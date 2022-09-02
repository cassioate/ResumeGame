import React from 'react';
import{HitBoxPlatform, PlatformImgStyled} from './styles';

interface PropsPlatform {
  bottom: number;
  width: number;
  height: number;
  left: number;
  img: string;
  rotate?: number;
  zIndex?: number;
}

export const Platform = ({bottom, width, height, left, img, rotate, zIndex}: PropsPlatform) => {

  return (
    <HitBoxPlatform
      id='HitBoxPlatform'
      bottom={bottom}
      width={width}
      height={height}
      left={left}
    >
      <PlatformImgStyled
        zIndex={zIndex}
        rotate={rotate}
        id='PlatformImg'
        width={width+10}
        height={height+5}
        src={img}
      /> 
    </HitBoxPlatform>
  );
}

