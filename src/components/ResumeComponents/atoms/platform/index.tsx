import React from 'react';
import{HitBoxPlatform, PlatformImgStyled} from './styles';

interface PropsPlatform {
  bottom: number;
  width: number;
  height: number;
  hitBoxWidth?: number;
  hitBoxHeight?: number;
  left: number;
  img: string;
  rotate?: number;
  zIndex?: number;
}

export const Platform = ({bottom, width, height, hitBoxWidth = width, hitBoxHeight = height, left, img, rotate, zIndex}: PropsPlatform) => {

  return (
    <>
      <HitBoxPlatform
        id='HitBoxPlatform'
        bottom={bottom}
        width={hitBoxWidth}
        height={0}
        left={left}
      >
        <PlatformImgStyled
          id='PlatformImg'
          zIndex={zIndex}
          rotate={rotate}
          width={width}
          height={height}
          src={img}
        /> 
      </HitBoxPlatform>

    </>

  );
}

