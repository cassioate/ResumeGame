import React, { useContext } from 'react';
import{ButtonIconArrowUp} from './styles';
import { FiArrowUp } from "react-icons/fi"
import { HeroMoveContext } from '../../../context/moveHeroContext';

export const ArrowUp = () => {
  const {setBottom, bottom} = useContext(HeroMoveContext);

  const changePosition = () => {
    setBottom(bottom+50)
  }

  return (
    <ButtonIconArrowUp onClick={() => changePosition()}>
      <FiArrowUp></FiArrowUp>
    </ButtonIconArrowUp>
  );
}

