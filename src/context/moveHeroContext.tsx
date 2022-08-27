import React, { FunctionComponent, ReactElement, useEffect, useRef, useState,  } from "react";
import { HERO_SIZE_HEIGHT, HERO_SIZE_WIDTH } from "../settings/constants";
import useEventListener from '@use-it/event-listener';

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  bottom: number;
  left: number;
  directionHero: string;
  height: number;
  width: number;
  // upMove: () => void;
  // downMove: () => void;
  // rightMove: () => void;
  // leftMove: () => void;
  // spaceMove: () => void;
}

export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [velocityMove, setVelocityMove] = useState(0);
  const [width, setWidth] = useState(HERO_SIZE_WIDTH);
  const [height, setHeight] = useState(HERO_SIZE_HEIGHT);
  const [isArrowRightPress, setIsArrowRightPress] = useState (false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState (false)
  const [isArrowUpPress, setIsArrowUpPress] = useState (false)
  const [isArrowDownPress, setIsArrowDownPress] = useState (false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState (false)
  const [directionHero, setDirectionHero] = useState('RIGHT');
  const [endJump, setEndJump] = useState(false)
  const intervalLeft = useRef<any>()

  const GRAVITY_DOWN = 0.99
  const GRAVITY_UP = 0.93
  const FLOOR = 0
  const MAX_JUMP = 25
  const MOVE_LEFT = 0.25
  const MOVE_RIGHT = 0.25

  
  // Gravity
  useEffect(() => {
    console.log(bottom)
    if (bottom > FLOOR && endJump){
      const timeId = setInterval(() => {   
        setBottom((bottom-1)*GRAVITY_DOWN);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
    if (bottom < FLOOR){
      setBottom(0)
    }
  }, [bottom, endJump])

  // Jumping
  useEffect(() => {
    if (bottom >= MAX_JUMP) {
      setEndJump(true)
    } else if (bottom === 0) {
      setEndJump(false)
    } 

    if (bottom > FLOOR && !endJump){
      const timeId = setInterval(() => {   
        setBottom((bottom+2)*GRAVITY_UP);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
  }, [bottom, endJump])

  // Make the move of Jumping
  useEffect(() => {
    if (bottom === FLOOR && (isArrowUpPress  || isArrowSpacePress)){
      setBottom(bottom+1)
    } 
  }, [bottom, isArrowUpPress, isArrowSpacePress])

  // Make move for the Right or the Left inside the GameBox
  useEffect(() => {
    if (velocityMove === 0){
      if (isArrowRightPress){
        setVelocityMove(MOVE_RIGHT)
        setLeft(left+MOVE_RIGHT)
      } 
      if (isArrowLeftPress){
        setVelocityMove(-MOVE_LEFT)
        setLeft(left-MOVE_LEFT)
      }
    }
  }, [left, velocityMove, isArrowLeftPress, isArrowRightPress])

  // Make a Looping to use the velocity to move the Hero
  useEffect(() => {
    intervalLeft.current = setInterval(() => {   
      if (left >= 0 && left <= 90) {
        setLeft(left+velocityMove)
      }
    }, 20)
    return () => {
      clearInterval(intervalLeft.current)
    }
  }, [left, velocityMove])

  // Change the side the carácter is looking
  useEffect(() => {
    if (velocityMove === MOVE_RIGHT) {
      setDirectionHero("RIGHT")
    } else if (velocityMove === -MOVE_LEFT){
      setDirectionHero("LEFT")
    }
  }, [velocityMove])

  useEventListener('keydown', ({key}: any) => {
    switch (key) {
      case 'ArrowLeft':
        setWidth(HERO_SIZE_WIDTH*0.9)
        setIsArrowLeftPress(true)
        break
      case 'ArrowRight':
        setWidth(HERO_SIZE_WIDTH*0.9)
        setIsArrowRightPress(true)
        break
      case 'ArrowDown':
        setHeight(HERO_SIZE_HEIGHT*0.75)
        setIsArrowDownPress(true)
        break
      case 'ArrowUp':
        setIsArrowUpPress(true)
        break
      case ' ':
        setIsArrowSpacePress(true)
        break
    }
  })

  useEventListener('keyup', ({key}: any) => {
    switch (key) {
      case 'ArrowLeft':
        clearInterval(intervalLeft.current)
        setVelocityMove(0)
        setWidth(HERO_SIZE_WIDTH)
        setIsArrowLeftPress(false)
        break
      case 'ArrowRight':
        clearInterval(intervalLeft.current)
        setVelocityMove(0)
        setWidth(HERO_SIZE_WIDTH)
        setIsArrowRightPress(false)
        break
      case 'ArrowDown':
        setHeight(HERO_SIZE_HEIGHT)
        setIsArrowDownPress(false)
        break
      case 'ArrowUp':
        setIsArrowUpPress(false)
        break
      case ' ':
        setIsArrowSpacePress(false)
        break
    }
  })

  return (
    <HeroMoveContext.Provider value={{
      bottom, left, directionHero, width, height,
      // upMove, downMove, rightMove, leftMove, spaceMove
    }}>
      {children}
    </HeroMoveContext.Provider>
  );
}