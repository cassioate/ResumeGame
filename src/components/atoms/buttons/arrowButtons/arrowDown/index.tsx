import React, { useContext } from 'react';
import{ButtonIconArrowDown} from './styles';
import { FiArrowDown } from "react-icons/fi"
import { HeroMoveContext } from '../../../../../context/moveHeroContext';

export const ArrowDown = () => {
  const {downMove} = useContext(HeroMoveContext)
  return (
    <ButtonIconArrowDown onClick={downMove}>
      <FiArrowDown></FiArrowDown>
    </ButtonIconArrowDown>
  );
}

