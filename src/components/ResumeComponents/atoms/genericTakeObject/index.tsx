import React from 'react';
import{HitBoxStyled, GenericTakeObjectStyled} from './styles';

interface PropsSpike {
  bottom: number;
  width: number;
  height: number;
  left: number;
  img: string;
  rotate?: number;
  zIndex?: number;
}

export const GenericTakeObject = ({bottom, width, height, left, img, rotate, zIndex}: PropsSpike) => {
  return (
    <HitBoxStyled
    id='HitBoxPlatform'
    bottom={bottom}
    width={width}
    height={height}
    left={left}
    >
      <GenericTakeObjectStyled
        zIndex={zIndex}
        id='DecorationImg'
        width={width+10}
        height={height+5}
        rotate={rotate}
        src={img}
      /> 
    </HitBoxStyled>
  );
}

