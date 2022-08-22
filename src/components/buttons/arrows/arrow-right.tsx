import React, { useContext } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';

export const ArrowRight = () => {
  const {setLeft, left} = useContext(HeroMoveContext);

  const changePosition = () => {
    setLeft(left+5)
  }

  return (
    <ButtonIconArrowRight onClick={() => changePosition()}>
      <FiArrowRight></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

