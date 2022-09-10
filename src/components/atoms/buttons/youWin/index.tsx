import React, { useContext } from 'react';
import{MenuText, ButtonNo, ButtonYes, ContainerButton, Container, MenuTextContainer} from './styles';
import { GameStats } from '../../../../context/ResumeGameContext/gameStatsContext';

export const YouWinButton = () => {
  const { setEND_GAME, setCONGRATULATIONS } = useContext(GameStats)

  const clickYes: any = () => {
    setCONGRATULATIONS(false)
    setEND_GAME(true)
  }

  const clickNo: any = () => {
    setCONGRATULATIONS(false)
    setEND_GAME(true)
  }
  

  return (
    <Container>
      <MenuTextContainer>
        You would like to download my resume?
      </MenuTextContainer>
      <ContainerButton>
        <ButtonYes href="./assets/cv/cv.pdf" download id='StartGameButton' onClick={() => clickYes()}>
          <MenuText>
            YES
          </MenuText>
        </ButtonYes>
        <ButtonNo id='StartGameButton' onClick={() => clickNo()}>
          <MenuText>
            NO
          </MenuText>
        </ButtonNo>
      </ContainerButton>
    </Container>
  );
}