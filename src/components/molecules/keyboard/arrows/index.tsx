/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { SpaceKeyboard } from '../../../atoms/buttons/arrowButtons/aKeyboardSpace';
import { ArrowDown } from '../../../atoms/buttons/arrowButtons/arrowDown';
import { ArrowLeft } from '../../../atoms/buttons/arrowButtons/arrowLeft';
import { ArrowRight } from '../../../atoms/buttons/arrowButtons/arrowRight';
import { ArrowUp } from '../../../atoms/buttons/arrowButtons/arrowUp';


import { Container, ContainerArrow } from './styles';

export const Arrows = () => {
  return (
    <Container>
      <ContainerArrow>
        <ArrowUp></ArrowUp>
        <ArrowDown></ArrowDown>
        <ArrowLeft></ArrowLeft>
        <ArrowRight></ArrowRight>
      </ContainerArrow>
      <SpaceKeyboard/>
    </Container>
  );
}
