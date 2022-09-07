import styled from 'styled-components'

export const Container = styled.div`  
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
`

export const ContainerButton = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  position: absolute;
  bottom: 20%;
`

export const ButtonNo = styled.button`
  font-size: 25px;
  border-radius: 55px;
  background-color: rgba(237, 40, 4, 0.5);
  height: 40px; 
  width: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: 10%;
  &:hover {
    background-color: rgba(237, 40, 4, 1);
  }
`;

export const ButtonYes = styled.button`
  font-size: 25px;
  border-radius: 55px;
  border-color: yellow;
  background-color: rgba(0, 165, 83, 0.6);
  height: 40px; 
  width: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  &:hover {
    background-color: rgba(0, 165, 83, 1);
  }
`;

export const MenuTextContainer = styled.h1`
  font-size: 18px;
  color: black;
  display: flex;
  position: absolute;
  bottom: 60%;
  width: 80%;
  text-align: center;
`;

export const MenuText = styled.h1`
  font-size: 15px;
  color: black;
`;