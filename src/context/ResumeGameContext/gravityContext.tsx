/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { START_MAX_JUMP, START_POSITION, HERO_SIZE_WIDTH_HIT_BOX,
  HERO_SIZE_HEIGHT_HIT_BOX, HERO_SIZE_HEIGHT_IMG, START_FLOOR, GRAVITY_UP, GRAVITY, POSITION_Y_TO_DIE, JUMP_VELOCITY } from "../../settings/constants";
import { GameContext } from "./gameContext";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
  POSITION_Y: number;
  POSITION_X: number;
  VELOCITY_OF_MOVE_X: number;
  VELOCITY_OF_MOVE_Y: number;
  HIT_BOX_HERO_WIDTH: number;
  HIT_BOX_HERO_HEIGHT: number;
  HERO_SIZE: number;
  inPlatform: any;
  floor: any;
  maxJump: any;
  velocity_x: any;
  velocity_y: any;
  position_x: any;
  position_y: any;
  gravity_on: any;
  setPOSITION_Y: (position: number) => void;
  setPOSITION_X: (position: number) => void;
  setVELOCITY_OF_MOVE_X: (velocity: number) => void;
  setVELOCITY_OF_MOVE_Y: (velocity: number) => void;
  setHIT_BOX_HERO_WIDTH: (width: number) => void;
  setHIT_BOX_HERO_HEIGHT: (height: number) => void;
  setHERO_SIZE: (size: number) => void;
}

export const GravityContext = React.createContext({} as IGravityContext);

export const GravityContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [POSITION_Y, setPOSITION_Y] = useState(START_FLOOR);
  const [POSITION_X, setPOSITION_X] = useState(START_POSITION);
  const [VELOCITY_OF_MOVE_X, setVELOCITY_OF_MOVE_X] = useState(0);
  const [VELOCITY_OF_MOVE_Y, setVELOCITY_OF_MOVE_Y] = useState(0);
  const [HIT_BOX_HERO_WIDTH, setHIT_BOX_HERO_WIDTH] = useState(HERO_SIZE_WIDTH_HIT_BOX)
  const [HIT_BOX_HERO_HEIGHT, setHIT_BOX_HERO_HEIGHT] = useState(HERO_SIZE_HEIGHT_HIT_BOX)
  const [HERO_SIZE, setHERO_SIZE] = useState(HERO_SIZE_HEIGHT_IMG)
  const { END_GAME } = useContext(GameContext)

  const position_x = useRef(START_POSITION)
  const position_y = useRef(START_FLOOR)
  const maxJump = useRef(START_MAX_JUMP)
  const floor = useRef(START_FLOOR)
  const inPlatform = useRef(true)
  const velocity_y = useRef(0)
  const velocity_x = useRef(0)
  const gravity_on = useRef(false)
  const intervalGravity = useRef<NodeJS.Timer>()

  // GRAVITY
  useEffect(() => {
      if (POSITION_Y >= maxJump.current){
        gravity_on.current = true
      } else if (POSITION_Y <= floor.current){
        clearInterval(intervalGravity.current)
        gravity_on.current = false
      }
      if (gravity_on.current || !inPlatform.current) {
      intervalGravity.current = setInterval(() => {
        setPOSITION_Y(POSITION_Y - JUMP_VELOCITY);
      }, 20)
      return () => {
        clearInterval(intervalGravity.current)
      }
    } 
  }, [POSITION_Y])

  // RESET THE GAME
  useEffect(() => {
    if (END_GAME){
      setPOSITION_X(START_POSITION)
      setPOSITION_Y(START_FLOOR)
      inPlatform.current = false
      velocity_y.current = 0
      velocity_x.current = 0
    }
  }, [END_GAME])

  return (
    <GravityContext.Provider value={{ position_x, position_y, gravity_on,
      POSITION_Y, POSITION_X, VELOCITY_OF_MOVE_X, VELOCITY_OF_MOVE_Y, HIT_BOX_HERO_WIDTH, maxJump, velocity_x, velocity_y,
      HIT_BOX_HERO_HEIGHT, HERO_SIZE, floor, inPlatform,
      setPOSITION_Y, setPOSITION_X, setVELOCITY_OF_MOVE_X, setVELOCITY_OF_MOVE_Y,
      setHIT_BOX_HERO_WIDTH, setHIT_BOX_HERO_HEIGHT, setHERO_SIZE
    }}>
      {children}
    </GravityContext.Provider>
  );
}