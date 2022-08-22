import React, { useContext } from 'react';
import{ButtonIconArrowLeft} from './styles';
import { FiArrowLeft } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';

export const ArrowLeft = () => {
  const {left, setLeft} = useContext(HeroMoveContext);

  const changePosition = () => {
    if (left > 0){
      setLeft(left-5)
    }
  }

  return (
    <ButtonIconArrowLeft onClick={() => changePosition()}>
      <FiArrowLeft></FiArrowLeft>
    </ButtonIconArrowLeft>
  );
}

