/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactElement, useRef, useContext, useEffect, MutableRefObject } from "react";
import { GAME_BOX_RANGE_FINAL, GAME_BOX_RANGE_INITIAL, JUMP_VELOCITY, MOVE_LEFT, MOVE_RIGHT } from "../../settings/constants";
import { GravityContext } from "./gravityContext";
import { KeyboardContext } from "./keyboardContext";
import useEventListener from '@use-it/event-listener';
import { GameStats } from "./gameStatsContext";

interface IProps {
  children: ReactElement;
}

export const GameMove = React.createContext({});

export const GameMoveProvider: FunctionComponent<IProps> = ({children}) => {
  const { END_GAME } = useContext(GameStats)
  const { POSITION_Y, setPOSITION_Y, POSITION_X, setPOSITION_X, gravity_on} = useContext(GravityContext)
  const { isArrowDownPress, isArrowLeftPress, isArrowRightPress, isArrowSpacePress, isArrowUpPress,
  setIsArrowDownPress, setIsArrowLeftPress, setIsArrowRightPress, setIsArrowSpacePress, setIsArrowUpPress } = useContext(KeyboardContext)

  const intervalLeft = useRef<any>()
  const intervalJump = useRef<any>()
  const velocity_y = useRef(0)
  const velocity_x = useRef(0)

  // Reset the game
  useEffect(() => {
    velocity_y.current = 0
    velocity_x.current = 0
  }, [END_GAME])

  /* MOVE RIGHT OR LEFT */
  // START the move for the Right or the Left inside the GameBox
  useEffect(() => {
    if (POSITION_X <= GAME_BOX_RANGE_INITIAL){
      setPOSITION_X(1)
    } else if (POSITION_X >= GAME_BOX_RANGE_FINAL){
      setPOSITION_X(GAME_BOX_RANGE_FINAL)
    }
    if (velocity_x.current === 0){
      if (isArrowRightPress){
        velocity_x.current = MOVE_RIGHT
        setPOSITION_X(POSITION_X+velocity_x.current)
      } 
      if (isArrowLeftPress){
        velocity_x.current = -MOVE_LEFT
        setPOSITION_X(POSITION_X-velocity_x.current)
      }
    }
  }, [POSITION_X, isArrowLeftPress, isArrowRightPress, isArrowDownPress])

  // Make a Looping to move for the Right or the Left inside the GameBox
  useEffect(() => {
    intervalLeft.current = setInterval(() => {   
        setPOSITION_X(POSITION_X+velocity_x.current)
    }, 20)
    return () => {
      clearInterval(intervalLeft.current)
    }
  }, [POSITION_X])
  /* MOVE RIGHT OR LEFT */

  /* JUMPING */
  // Start the jump
  useEffect(() => {
    if (velocity_y.current === 0 && (isArrowSpacePress || isArrowUpPress)){
      velocity_y.current = JUMP_VELOCITY
      setPOSITION_Y(POSITION_Y+velocity_y.current)
    }
  }, [POSITION_Y])

  // Make a Looping to JUMP inside the GameBox
  useEffect(() => {
    if (!gravity_on.current) {
      intervalJump.current = setInterval(() => {   
        setPOSITION_Y(POSITION_Y+velocity_y.current)
      }, 20)
      return () => {
        clearInterval(intervalJump.current)
      }
    }
  }, [POSITION_Y])
  /* JUMPING */

  useEventListener('keydown', ({key}: any) => {
    if (!END_GAME) {
      switch (key) {
        case 'ArrowLeft':
          if (!isArrowLeftPress){
            setIsArrowLeftPress(true)
          }
          break
        case 'ArrowRight':
          if (!isArrowRightPress){
            setIsArrowRightPress(true)
          }
          break
        case 'ArrowDown':
          setIsArrowDownPress(true)
          break
        case 'ArrowUp':
          if (!isArrowUpPress && !isArrowSpacePress){
            setPOSITION_Y(POSITION_Y+JUMP_VELOCITY)
            setIsArrowUpPress(true)
          }
          break
        case ' ':
          if (!isArrowUpPress && !isArrowSpacePress){
            setPOSITION_Y(POSITION_Y+JUMP_VELOCITY)
            setIsArrowSpacePress(true)
          }
          break
      }
    }
  })

  useEventListener('keyup', ({key}: any) => {
    if (!END_GAME) {
      switch (key) {
        case 'ArrowLeft':
          clearInterval(intervalLeft.current)
          velocity_x.current = 0
          setIsArrowLeftPress(false)
          break
        case 'ArrowRight':
          clearInterval(intervalLeft.current)
          velocity_x.current = 0
          setIsArrowRightPress(false)
          break
        case 'ArrowDown':
          setIsArrowDownPress(false)
          break
        case 'ArrowUp':
          setIsArrowUpPress(false)
          break
        case ' ':
          setIsArrowSpacePress(false)
          break
      }
    }
  })

  return (
    <GameMove.Provider value={{}}>
      {children}
    </GameMove.Provider>
  );
}