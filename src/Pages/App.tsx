import React from 'react';
import { Footer } from '../components/AppComponents/molecules/footer';
import { Header } from '../components/AppComponents/molecules/header';
import { AppStyled } from './App-styled';
import { ResumeGame } from './ResumeGame/ResumeGame';

export const App = () => {
  return (
      <AppStyled>
        <Header/>
        <ResumeGame/>
        <Footer/>
      </AppStyled>
  );
}