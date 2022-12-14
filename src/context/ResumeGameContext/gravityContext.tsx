/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { START_POSITION, START_FLOOR, JUMP_VELOCITY } from "../../settings/constants";
import { GameStats } from "./gameStatsContext";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
  floor: MutableRefObject<number>
  inPlatform: MutableRefObject<boolean>
  gravity_on: MutableRefObject<boolean>
  POSITION_X: number
  POSITION_Y: number
  setPOSITION_X: (value: number) => void
  setPOSITION_Y: (value: number) => void
}

export const GravityContext = React.createContext({} as IGravityContext);

export const GravityContextProvider: FunctionComponent<IProps> = ({children}) => {
  const { END_GAME } = useContext(GameStats)
  
  const [POSITION_X, setPOSITION_X] = useState(START_POSITION);
  const [POSITION_Y, setPOSITION_Y] = useState(START_FLOOR);

  const intervalGravity = useRef<NodeJS.Timer>()
  const floor = useRef(START_FLOOR)
  const inPlatform = useRef(true)
  const gravity_on = useRef(true)

  // GRAVITY
  useEffect(() => {
    // power off the gravity if is in the ground or below
    if (POSITION_Y <= floor.current){
      gravity_on.current = false
    }
    // This worked like recursive, if not in platform then put the gravity in state of true and call this every time
    if (gravity_on.current || !inPlatform.current) {
      gravity_on.current = true
      intervalGravity.current = setInterval(() => {
      setPOSITION_Y(POSITION_Y - JUMP_VELOCITY);
    }, 20)
    return () => {
      clearInterval(intervalGravity.current)
    }
  } 
  }, [POSITION_Y, POSITION_X])

  // RESET THE GAME
  useEffect(() => {
    setPOSITION_X(START_POSITION)
    setPOSITION_Y(START_FLOOR)
  }, [END_GAME])

  return (
    <GravityContext.Provider value={{ 
      gravity_on, POSITION_Y, POSITION_X, floor, inPlatform, setPOSITION_Y, setPOSITION_X }}>
      {children}
    </GravityContext.Provider>
  );
}