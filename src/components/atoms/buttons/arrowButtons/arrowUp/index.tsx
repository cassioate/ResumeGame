import React, { useContext } from 'react';
import{ButtonIconArrowUp} from './styles';
import { FiArrowUp } from "react-icons/fi"
import { HeroMoveContext } from '../../../../../context/moveHeroContext';

export const ArrowUp = () => {
  const {upMove} = useContext(HeroMoveContext)

  return (
    <ButtonIconArrowUp onClick={upMove}>
      <FiArrowUp/>
    </ButtonIconArrowUp>
  );
}

