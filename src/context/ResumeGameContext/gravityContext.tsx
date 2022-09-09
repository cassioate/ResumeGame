/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { START_MAX_JUMP, START_POSITION, HERO_SIZE_HEIGHT_IMG, START_FLOOR, JUMP_VELOCITY } from "../../settings/constants";
import { GameContext } from "./gameContext";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
  POSITION_Y: number;
  POSITION_X: number;
  inPlatform: any;
  floor: any;
  maxJump: any;
  velocity_x: any;
  velocity_y: any;
  gravity_on: any;
  intervalJump: any;
  validJump: any;
  setPOSITION_Y: (position: number) => void;
  setPOSITION_X: (position: number) => void;
}

export const GravityContext = React.createContext({} as IGravityContext);

export const GravityContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [POSITION_Y, setPOSITION_Y] = useState(START_FLOOR);
  const [POSITION_X, setPOSITION_X] = useState(START_POSITION);
  const { END_GAME } = useContext(GameContext)


  const maxJump = useRef(START_MAX_JUMP)
  const floor = useRef(START_FLOOR)
  const inPlatform = useRef(true)
  const velocity_y = useRef(0)
  const velocity_x = useRef(0)
  const gravity_on = useRef(true)
  const intervalJump = useRef<any>()
  const intervalGravity = useRef<NodeJS.Timer>()
  const validJump = useRef<any>()

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
    velocity_x.current = 0
  }, [END_GAME])

  return (
    <GravityContext.Provider value={{ 
      gravity_on, intervalJump, validJump, POSITION_Y, POSITION_X, maxJump, velocity_x, velocity_y, floor, inPlatform,
      setPOSITION_Y, setPOSITION_X }}>
      {children}
    </GravityContext.Provider>
  );
}