/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { HeroMoveContext } from '../../../../context/heroPropsContext';
import { SpaceKeyboard } from '../../../atoms/buttons/arrowButtons/aKeyboardSpace';
import { ArrowDown } from '../../../atoms/buttons/arrowButtons/arrowDown';
import { ArrowLeft } from '../../../atoms/buttons/arrowButtons/arrowLeft';
import { ArrowRight } from '../../../atoms/buttons/arrowButtons/arrowRight';
import { ArrowUp } from '../../../atoms/buttons/arrowButtons/arrowUp';
import useEventListener from '@use-it/event-listener';

import { Container, ContainerArrow } from './styles';
import { MOVE_RIGHT, MOVE_LEFT, FLOOR, HERO_SIZE_WIDTH, HERO_SIZE_HEIGHT } from '../../../../settings/constants';
import { KeyboardContext } from '../../../../context/keyboardContext';

export const Arrows = () => {
  const { POSITION_Y, setPOSITION_Y, POSITION_X, setPOSITION_X, setHERO_DIRECTION, 
    setHERO_WIDTH, setHERO_HEIGHT, VELOCITY_OF_MOVE, setVELOCITY_OF_MOVE } = useContext(HeroMoveContext)
  const { isArrowDownPress, isArrowLeftPress, isArrowRightPress, isArrowSpacePress, isArrowUpPress,
  setIsArrowDownPress, setIsArrowLeftPress, setIsArrowRightPress, setIsArrowSpacePress, setIsArrowUpPress } = useContext(KeyboardContext)
  const intervalLeft = useRef<any>()

  // Make move for the Right or the Left inside the GameBox and when press ArrowDown the hero get a smaller size
  useEffect(() => {
    if (POSITION_X <= 0){
      setPOSITION_X(0)
    } else if (POSITION_X >= 90){
      setPOSITION_X(90)
    }
    if (VELOCITY_OF_MOVE === 0){
      if (isArrowRightPress){
        setVELOCITY_OF_MOVE(MOVE_RIGHT)
        setHERO_WIDTH(HERO_SIZE_WIDTH*0.9)
        setPOSITION_X(POSITION_X+MOVE_RIGHT)
      } 
      if (isArrowLeftPress){
        setVELOCITY_OF_MOVE(-MOVE_LEFT)
        setHERO_WIDTH(HERO_SIZE_WIDTH*0.9)
        setPOSITION_X(POSITION_X-MOVE_LEFT)
      }
    }
    if (isArrowDownPress){
      setHERO_HEIGHT(HERO_SIZE_HEIGHT*0.75)
    }
  }, [POSITION_X, VELOCITY_OF_MOVE, isArrowLeftPress, isArrowRightPress, isArrowDownPress])

  // Make the move of Jumping
  useEffect(() => {
      if (POSITION_Y === FLOOR && (isArrowUpPress  || isArrowSpacePress)){
        setPOSITION_Y(POSITION_Y+1)
      } 
    }, [POSITION_Y, isArrowUpPress, isArrowSpacePress])
  
  // Make a Looping to use the velocity to move the Hero
  useEffect(() => {
    intervalLeft.current = setInterval(() => {   
      if (POSITION_X >= 0 && POSITION_X <= 90) {
        setPOSITION_X(POSITION_X+VELOCITY_OF_MOVE)
      }
    }, 20)
    return () => {
      clearInterval(intervalLeft.current)
    }
  }, [POSITION_X, VELOCITY_OF_MOVE])

  // Change the side the carácter is looking
  useEffect(() => {
    if (VELOCITY_OF_MOVE === MOVE_RIGHT) {
      setHERO_DIRECTION("RIGHT")
    } else if (VELOCITY_OF_MOVE === -MOVE_LEFT){
      setHERO_DIRECTION("LEFT")
    }
  }, [VELOCITY_OF_MOVE])

  useEventListener('keydown', ({key}: any) => {
    switch (key) {
      case 'ArrowLeft':
        setIsArrowLeftPress(true)
        break
      case 'ArrowRight':
        setIsArrowRightPress(true)
        break
      case 'ArrowDown':
        setHERO_HEIGHT(HERO_SIZE_HEIGHT*0.75)
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
        setVELOCITY_OF_MOVE(0)
        setHERO_WIDTH(HERO_SIZE_WIDTH)
        setIsArrowLeftPress(false)
        break
      case 'ArrowRight':
        clearInterval(intervalLeft.current)
        setVELOCITY_OF_MOVE(0)
        setHERO_WIDTH(HERO_SIZE_WIDTH)
        setIsArrowRightPress(false)
        break
      case 'ArrowDown':
        setHERO_HEIGHT(HERO_SIZE_HEIGHT)
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
