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
  const [width, setWidth] = useState(HERO_SIZE_WIDTH);
  const [height, setHeight] = useState(HERO_SIZE_HEIGHT);
  const [isArrowRightPress, setIsArrowRightPress] = useState (false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState (false)
  const [isArrowUpPress, setIsArrowUpPress] = useState (false)
  const [isArrowDownPress, setIsArrowDownPress] = useState (false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState (false)
  const [directionHero, setDirectionHero] = useState('RIGHT');
  const [endJump, setEndJump] = useState(false)
  const intervalBottom = useRef<any>()
  const jumpBottom = useRef<any>(bottom)
  const GRAVITY = 0.5
  const FLOOR = 0
  const MAX_JUMP = 25

  // Gravity
  useEffect(() => {
    if (bottom > FLOOR && endJump){
      const timeId = setInterval(() => {   
        setBottom(bottom-GRAVITY);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    }
  }, [bottom, endJump])

  // Jumping
  useEffect(() => {
    if (bottom > FLOOR && bottom < MAX_JUMP && !endJump){
      const timeId = setInterval(() => {   
        setBottom(bottom+GRAVITY);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    } else if (bottom === MAX_JUMP) {
      setEndJump(true)
    } else if (bottom === 0) {
      setEndJump(false)
    }
  }, [bottom])

  useEffect(() => {
    if (isArrowRightPress){
      setLeft(left+1)
    } 
    if (isArrowLeftPress){
      setLeft(left-1)
    } 
    if (bottom === FLOOR && (isArrowUpPress  || isArrowSpacePress)){
      setBottom(bottom+1)
    } 
    // if (bottom > MAX_JUMP) {
    //   clearInterval(intervalBottom.current)
    //   intervalBottom.current = undefined
    // }
  }, [bottom, isArrowUpPress, isArrowDownPress, isArrowLeftPress, isArrowRightPress, isArrowSpacePress])

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
        setDirectionHero('LEFT')
        setWidth(HERO_SIZE_WIDTH)
        setIsArrowLeftPress(false)
        break
      case 'ArrowRight':
        setDirectionHero('RIGHT')
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