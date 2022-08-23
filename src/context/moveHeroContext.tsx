import React, { FunctionComponent, ReactElement, useEffect, useState,  } from "react";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  bottom: number;
  left: number;
  directionHero: string;
  setBottom: (bottom: number) => void;
  setLeft: (left: number) => void;
  setDirectionHero: (directionHero: string) => void;
}

export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [directionHero, setDirectionHero] = useState('RIGHT');
  const gravity = 4

  useEffect(() => {
    if (bottom > 0){
      const timeId = setInterval(() => {   
        setBottom(bottom-gravity);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
  }, [bottom])

  return (
    <HeroMoveContext.Provider value={{bottom, left, directionHero, setDirectionHero, setBottom, setLeft}}>
      {children}
    </HeroMoveContext.Provider>
  );
}