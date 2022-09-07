import React, { useContext } from 'react';
import{MenuText, ButtonNo, ButtonYes, ContainerButton, Container, MenuTextContainer} from './styles';
import { GameContext } from '../../../../context/ResumeGameContext/gameContext';

export const YouWinButton = () => {
  const { setEND_GAME, setCONGRATULATIONS } = useContext(GameContext)

  const clickYes: any = () => {
    setCONGRATULATIONS(false)
    setEND_GAME(true)
    //Download
    alert('DOWNLOAD')
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
        <ButtonYes id='StartGameButton' onClick={() => clickYes()}>
          <MenuText>
            YES
            {/* <BsPlay/> */}
          </MenuText>
        </ButtonYes>
        <ButtonNo id='StartGameButton' onClick={() => clickNo()}>
          <MenuText>
            NO
            {/* <BsPlay/> */}
          </MenuText>
        </ButtonNo>
      </ContainerButton>
    </Container>
  );
}