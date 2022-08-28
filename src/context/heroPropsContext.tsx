import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { FLOOR, GRAVITY_DOWN, GRAVITY_UP, HERO_SIZE_HEIGHT, HERO_SIZE_WIDTH, MAX_JUMP, START_POSITION } from "../settings/constants";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  POSITION_Y: number;
  POSITION_X: number;
  HERO_DIRECTION: string;
  HERO_HEIGHT: number;
  HERO_WIDTH: number;
  VELOCITY_OF_MOVE: number;
  setHERO_DIRECTION: (direction: string) => void;
  setPOSITION_Y: (position: number) => void;
  setPOSITION_X: (position: number) => void;
  setHERO_WIDTH: (size: number) => void;
  setHERO_HEIGHT: (size: number) => void;
  setVELOCITY_OF_MOVE: (velocity: number) => void;
}

export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [POSITION_Y, setPOSITION_Y] = useState(FLOOR);
  const [POSITION_X, setPOSITION_X] = useState(START_POSITION);
  const [HERO_WIDTH, setHERO_WIDTH] = useState(HERO_SIZE_WIDTH);
  const [HERO_HEIGHT, setHERO_HEIGHT] = useState(HERO_SIZE_HEIGHT);
  const [HERO_DIRECTION, setHERO_DIRECTION] = useState('RIGHT');
  const [END_JUMP, setEND_JUMP] = useState(false)
  const [VELOCITY_OF_MOVE, setVELOCITY_OF_MOVE] = useState(0);

  // Gravity
  useEffect(() => {
    if (POSITION_Y > FLOOR && END_JUMP){
      const timeId = setInterval(() => {   
        setPOSITION_Y((POSITION_Y-1)*GRAVITY_DOWN);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
    if (POSITION_Y < FLOOR){
      setPOSITION_Y(0)
    }
  }, [POSITION_Y, END_JUMP])

  // Jumping
  useEffect(() => {
    if (POSITION_Y >= MAX_JUMP) {
      setEND_JUMP(true)
    } else if (POSITION_Y === 0) {
      setEND_JUMP(false)
    } 

    if (POSITION_Y > FLOOR && !END_JUMP){
      const timeId = setInterval(() => {   
        setPOSITION_Y((POSITION_Y+2)*GRAVITY_UP);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
  }, [POSITION_Y, END_JUMP])

  return (
    <HeroMoveContext.Provider value={{
      POSITION_Y, POSITION_X, HERO_DIRECTION, HERO_WIDTH, HERO_HEIGHT, VELOCITY_OF_MOVE,
      setHERO_DIRECTION, setPOSITION_Y, setPOSITION_X, setHERO_WIDTH, setHERO_HEIGHT, setVELOCITY_OF_MOVE
    }}>
      {children}
    </HeroMoveContext.Provider>
  );
}