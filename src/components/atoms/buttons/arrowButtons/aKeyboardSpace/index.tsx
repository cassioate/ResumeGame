import React, { useContext } from 'react';
import { MdSpaceBar } from "react-icons/md"
import { HeroMoveContext } from '../../../../../context/moveHeroContext';
import { ButtonIconSpace } from './styles';

export const SpaceKeyboard = () => {
  const {spaceMove} = useContext(HeroMoveContext)
  
  return (
    <ButtonIconSpace onClick={spaceMove}>
      <MdSpaceBar/>
    </ButtonIconSpace>
  );
}

