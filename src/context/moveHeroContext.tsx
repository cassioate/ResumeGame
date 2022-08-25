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
}

export const HeroMoveContext = React.createContext({} as IHeroMoveContext);

export const MoveHeroContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(HERO_SIZE_WIDTH);
  const [height, setHeight] = useState(HERO_SIZE_HEIGHT);
  const [directionHero, setDirectionHero] = useState('RIGHT');
  const [isArrowRightPress, setIsArrowRightPress] = useState (false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState (false)
  const [isArrowUpPress, setIsArrowUpPress] = useState (false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState (false)
  const timerId = useRef<any>()
  const GRAVITY = 0.9
    
  useEffect(() => {
    if (isArrowRightPress){
      rightMove()
    } 
    if (isArrowLeftPress){
      leftMove()
    } 
    if (isArrowUpPress  || isArrowSpacePress){
      upMove()
    } 
    if (bottom > 25) {
      clearInterval(timerId.current)
      timerId.current = undefined
    }
    // This logic is made because useEffect stop working when bottom is 0 and the Hero can't stay pressed the button for left or right.
    if (bottom === 0) {
      setBottom(0.000001)
    }
    if (bottom > 0){
      const timeId = setInterval(() => {   
        setBottom(bottom-GRAVITY);
      }, 20)
      return () => {
        clearInterval(timeId)
      }
    } else if (bottom < 0 ){
      setBottom(0)
    }
  }, [bottom])

  const downMove = () => {
    if (bottom > 0){
      setBottom(bottom-1)
    }
    if (bottom < 0){
      setBottom(0)
    }
  }

  const upMove = async () => {
    if (bottom === 0 && bottom < 15 && !timerId?.current) {
      timerId.current = setInterval(() => { 
        setBottom((b: number) => b+GRAVITY);
      }, 10)
    }
  }

  const spaceMove = () => {
    if (bottom === 0 && bottom < 15) {
      upMove()
    }
  }

  const rightMove = () => {
    if (left >= 0 && left < 90) {
      setLeft(left+0.25)
      setDirectionHero('RIGHT')
    }
  }

  const leftMove = () => {
    if (left > 0 && left <= 90){
      setLeft(left-0.25)
      setDirectionHero('LEFT')
    }
  }

  useEventListener('keydown', (event: any) => {
    if (event.key === 'ArrowLeft'){
      setWidth(HERO_SIZE_WIDTH*0.85)
      setIsArrowLeftPress(true)
      leftMove()
    } else if (event.key === 'ArrowRight'){
      setWidth(HERO_SIZE_WIDTH*0.85)
      setIsArrowRightPress(true)
      rightMove()
    } else if (event.key === 'ArrowDown'){
      setHeight(HERO_SIZE_HEIGHT*0.75)
      downMove()
    } else if (event.key === 'ArrowUp'){
      setIsArrowUpPress(true)
      upMove()
    } else if (event.key === ' '){
      setIsArrowSpacePress(true)
      spaceMove()
    }
  })

  useEventListener('keyup', (event: any) => {
    if (event.key === 'ArrowLeft'){
      setWidth(HERO_SIZE_WIDTH)
      setIsArrowLeftPress(false)
    } else if (event.key === 'ArrowRight'){
      setWidth(HERO_SIZE_WIDTH)
      setIsArrowRightPress(false)
    } else if (event.key === 'ArrowDown'){
      setHeight(HERO_SIZE_HEIGHT)
    } else if (event.key === 'ArrowUp'){
      setIsArrowUpPress(false)
    } else if (event.key === ' '){
      setIsArrowSpacePress(false)
    }
  })

  return (
    <HeroMoveContext.Provider value={{bottom, left, directionHero, width, height }}>
      {children}
    </HeroMoveContext.Provider>
  );
}