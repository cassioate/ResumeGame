import styled from 'styled-components'

export const StartButton = styled.button`
  font-size: 25px;
  border-radius: 55px;
  border-color: yellow;
  background-color: rgba(255,255,255, 1);
  height: 40px; 
  width: 250px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  &:hover {
    border-color: gray;
    border-style: solid;
  }
`;

export const MenuText = styled.h1`
  font-size: 15px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;