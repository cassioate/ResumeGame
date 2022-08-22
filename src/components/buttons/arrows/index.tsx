import React from 'react';
import { ArrowDown } from './arrow-down';
import { ArrowLeft } from './arrow-left';
import { ArrowRight } from './arrow-right';
import { ArrowUp } from './arrow-up';
import { Container } from './styles';


export const Arrows = () => {
  return (
    <Container>
      <ArrowUp></ArrowUp>
      <ArrowDown></ArrowDown>
      <ArrowLeft></ArrowLeft>
      <ArrowRight></ArrowRight>
    </Container>
  );
}
