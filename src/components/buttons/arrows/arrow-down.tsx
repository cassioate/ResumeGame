import React, { useContext } from 'react';
import{ButtonIconArrowDown} from './styles';
import { FiArrowDown } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';

export const ArrowDown = () => {
  const {setBottom, bottom} = useContext(HeroMoveContext);

  const changePosition = () => {
    if (bottom > 0){
      setBottom(bottom-5)
    }
  }

  return (
    <ButtonIconArrowDown onClick={() => changePosition()}>
      <FiArrowDown></FiArrowDown>
    </ButtonIconArrowDown>
  );
}

