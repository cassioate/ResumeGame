import React, { useContext } from 'react';
import{ButtonIconArrowRight} from './styles';
import { FiArrowRight } from "react-icons/fi"
import { HeroMoveContext } from '../../../../../context/moveHeroContext';


export const ArrowRight = () => {
  const {rightMove} = useContext(HeroMoveContext)
  return (
    <ButtonIconArrowRight onClick={rightMove}>
      <FiArrowRight></FiArrowRight>
    </ButtonIconArrowRight>
  );
}

