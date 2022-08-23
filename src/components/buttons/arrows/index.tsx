import React from 'react';
import { ArrowDown } from './arrow-down';
import { ArrowLeft } from './arrow-left';
import { ArrowRight } from './arrow-right';
import { ArrowUp } from './arrow-up';
import { SpaceKeyboard } from './space';
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
