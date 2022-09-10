import React from 'react';
import { YouWinButton } from '../../atoms/youWin';
import { Container } from './style';

export const Congratulations = ({children}: any) => {
  
  return (
    <Container  id='Congratulations'>
      <YouWinButton/>
    </Container>
  );
}