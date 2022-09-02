import React from 'react';
import{DecorationStyled} from './styles';

interface PropsDecoration {
  bottom: number;
  width: number;
  height: number;
  left: number;
  img: string;
  rotate?: number;
  zIndex?: number;
}

export const Decoration = ({bottom, width, height, left, img, rotate, zIndex}: PropsDecoration) => {

  return (
    <DecorationStyled
      id='DecorationImg'
      left={left}
      bottom={bottom}
      width={width+10}
      height={height+5}
      rotate={rotate}
      zIndex={zIndex}
      src={img}
    /> 
  );
}

