import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import { HeroMoveContext } from '../../../../../context/moveHeroContext';

export const ArrowLeft = () => {
  const {leftMove} = useContext(HeroMoveContext)
  return (
    <ButtonIconArrowLeft onClick={leftMove}>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

