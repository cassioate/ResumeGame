/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useContext } from "react";
import { GRAVITY_DOWN, GRAVITY_UP, HERO_SIZE_HEIGHT_HIT_BOX, 
  HERO_SIZE_HEIGHT_IMG, HERO_SIZE_WIDTH_HIT_BOX, 
  START_MAX_JUMP, START_FLOOR, START_POSITION } from "../settings/constants";
import { GameContext } from "./gameContext";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  POSITION_Y: number;
  POSITION_X: number;
  VELOCITY_OF_MOVE: number;
  HIT_BOX_HERO_WIDTH: number;
  HIT_BOX_HERO_HEIGHT: number;
  HERO_SIZE: number;
  FLOOR: number;
  MAX_JUMP: number;
  OUT_OF_PLATFORM: boolean;
  IN_PLATFORM: boolean;
  setPOSITION_Y: (position: number) => void;
  setPOSITION_X: (position: number) => void;
  setVELOCITY_OF_MOVE: (velocity: number) => void;
  setHIT_BOX_HERO_WIDTH: (width: number) => void;
  setHIT_BOX_HERO_HEIGHT: (height: number) => void;
  setHERO_SIZE: (size: number) => void;
  setOUT_OF_PLATFORM: (out: boolean) => void;
  setIN_PLATFORM: (out: boolean) => void;
  setFLOOR: (floor: number) => void;
  setMAX_JUMP: (floor: number) => void;
}

export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [IN_PLATFORM, setIN_PLATFORM] = useState(false);
  const [MAX_JUMP, setMAX_JUMP] = useState(START_MAX_JUMP);
  const [POSITION_Y, setPOSITION_Y] = useState(START_FLOOR);
  const [POSITION_X, setPOSITION_X] = useState(START_POSITION);
  const [GRAVITY_ON, setGRAVITY_ON] = useState(false)
  const [VELOCITY_OF_MOVE, setVELOCITY_OF_MOVE] = useState(0);
  const [HIT_BOX_HERO_WIDTH, setHIT_BOX_HERO_WIDTH] = useState(HERO_SIZE_WIDTH_HIT_BOX)
  const [HIT_BOX_HERO_HEIGHT, setHIT_BOX_HERO_HEIGHT] = useState(HERO_SIZE_HEIGHT_HIT_BOX)
  const [HERO_SIZE, setHERO_SIZE] = useState(HERO_SIZE_HEIGHT_IMG)
  const [OUT_OF_PLATFORM, setOUT_OF_PLATFORM] = useState(false)
  const [FLOOR, setFLOOR] = useState(START_FLOOR)
  const { END_GAME } = useContext(GameContext)

  // Gravity
  useEffect(() => {
    if (!END_GAME) {
      if (POSITION_Y > FLOOR && GRAVITY_ON){
        const timeId = setInterval(() => {   
          setPOSITION_Y((POSITION_Y-2)*GRAVITY_DOWN);
        }, 20)
        return () => {
          clearInterval(timeId)
        }
      } else if (!IN_PLATFORM){
        const timeId = setInterval(() => {   
          setPOSITION_Y((POSITION_Y-2)*GRAVITY_DOWN);
        }, 20)
        return () => {
          clearInterval(timeId)
        }
      }
      if (POSITION_Y < FLOOR && IN_PLATFORM){
        setPOSITION_Y(FLOOR)
      }
    }
  }, [POSITION_Y, GRAVITY_ON, IN_PLATFORM, FLOOR])

  // Jumping
  useEffect(() => {
    if (!END_GAME) {
      if (POSITION_Y >= MAX_JUMP) {
        setGRAVITY_ON(true)
      } else if (POSITION_Y === FLOOR) {
        setGRAVITY_ON(false)
      } 
  
      if (POSITION_Y > FLOOR && !GRAVITY_ON){
        const timeId = setInterval(() => {   
          setPOSITION_Y((POSITION_Y+5)*GRAVITY_UP);
        }, 20)
        return () => {
          clearInterval(timeId)
        }
      }
    }
  }, [POSITION_Y, GRAVITY_ON])

  // RESET THE GAME
  useEffect(() => {
    setPOSITION_X(START_POSITION)
    setPOSITION_Y(START_FLOOR)
    setOUT_OF_PLATFORM(false)
    setVELOCITY_OF_MOVE(0)
  }, [END_GAME])

  return (
    <HeroMoveContext.Provider value={{
      POSITION_Y, POSITION_X, VELOCITY_OF_MOVE, HIT_BOX_HERO_WIDTH, MAX_JUMP,
      HIT_BOX_HERO_HEIGHT, HERO_SIZE, OUT_OF_PLATFORM, FLOOR, IN_PLATFORM,
      setPOSITION_Y, setPOSITION_X, setVELOCITY_OF_MOVE, setFLOOR, setIN_PLATFORM, setMAX_JUMP,
      setHIT_BOX_HERO_WIDTH, setHIT_BOX_HERO_HEIGHT, setHERO_SIZE, setOUT_OF_PLATFORM
    }}>
      {children}
    </HeroMoveContext.Provider>
  );
}