/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { HeroMoveContext } from '../../../context/moveHeroContext';
import { ArrowDown } from './arrow-down';
import { ArrowLeft } from './arrow-left';
import { ArrowRight } from './arrow-right';
import { ArrowUp } from './arrow-up';
import { SpaceKeyboard } from './space';
import useEventListener from '@use-it/event-listener';
import { Container, ContainerArrow } from './styles';
import { HERO_SIZE_HEIGHT, HERO_SIZE_WIDTH } from '../../../settings/constants';


export const Arrows = () => {
  const {width, height, left, bottom, setHeight, setWidth, setBottom, setLeft, setDirectionHero} = useContext(HeroMoveContext);
  const [isArrowRightPress, setIsArrowRightPress] = useState (false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState (false)
  const [isArrowUpPress, setIsArrowUpPress] = useState (false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState (false)
  const GRAVITY = 0.9

  const timerId = useRef<any>()

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
    if (bottom == 0) {
      setBottom(0.000001)
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
    <Container>
      <ContainerArrow>
        <ArrowUp></ArrowUp>
        <ArrowDown></ArrowDown>
        <ArrowLeft></ArrowLeft>
        <ArrowRight></ArrowRight>
      </ContainerArrow>
      <SpaceKeyboard/>
    </Container>
  );
}
