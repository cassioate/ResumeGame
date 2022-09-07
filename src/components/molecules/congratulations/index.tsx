import React from 'react';
import { YouWinButton } from '../../atoms/buttons/youWin';
import { Container } from './style';

export const Congratulations = ({children}: any) => {
  
  return (
    <Container  id='Congratulations'>
      <YouWinButton/>
    </Container>
  );
}