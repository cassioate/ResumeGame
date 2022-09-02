import React from 'react';
import{WallStyled} from './styles';

interface PropsWall {
  bottom: number;
  width: number;
  height: number;
  left: number;
  img: string;
  rotate?: number;
}

export const Wall = ({bottom, width, height, left, img, rotate}: PropsWall) => {

  return (
    <WallStyled
      id='WallImg'
      left={left}
      bottom={bottom}
      width={width+10}
      height={height+5}
      rotate={rotate}
      src={img}
    /> 
  );
}

