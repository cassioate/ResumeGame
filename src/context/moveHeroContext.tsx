import React, { FunctionComponent, ReactElement, useEffect, useState,  } from "react";
import { HERO_SIZE_HEIGHT, HERO_SIZE_WIDTH } from "../settings/constants";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  bottom: number;
  left: number;
  directionHero: string;
  height: number;
  width: number;
  setBottom: (bottom: any) => void;
  setLeft: (left: any) => void;
  setDirectionHero: (directionHero: string) => void;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
}


export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(HERO_SIZE_WIDTH);
  const [height, setHeight] = useState(HERO_SIZE_HEIGHT);
  const [directionHero, setDirectionHero] = useState('RIGHT');
  const gravity = 0.9

  useEffect(() => {
    if (bottom > 0){
      const timeId = setInterval(() => {   
        setBottom(bottom-gravity);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    } else if (bottom < 0 ){
      setBottom(0)
    }
  }, [bottom])
  

  return (
    <HeroMoveContext.Provider value={{
      bottom, left, directionHero, width, height, 
      setDirectionHero, setBottom, setLeft, setHeight, setWidth}}>
      {children}
    </HeroMoveContext.Provider>
  );
}