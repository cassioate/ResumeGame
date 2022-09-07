/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Decoration } from "../../atoms/decoration";

interface DecorationsI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Decorations = () => {
  const DECORATION_ONE: DecorationsI  = {x: 50, y:0, width: 50, height: 600}
  const DECORATION_TWO: DecorationsI  = {x: 250, y:0, width: 50, height: 600}
  const DECORATION_THREE: DecorationsI  = {x: 500, y:0, width: 150, height: 600}
  const DECORATION_FOUR: DecorationsI  = {x: 0, y:30, width: 80, height: 80}
  const DECORATION_FIVE: DecorationsI  = {x: 250, y:230, width: 150, height: 100}
  // const DECORATION_SIX: DecorationsI  = {x: 400, y:30, width: 150, height: 200}
  const DECORATION_SEVEN: DecorationsI  = {x: 450, y:30, width: 50, height: 100}

  return (
    <>
      <Decoration
        zIndex={0}
        bottom={DECORATION_ONE.y}
        left={DECORATION_ONE.x}
        width={DECORATION_ONE.width}
        height={DECORATION_ONE.height}
        img={'./assets/vines/vine1.png'}
      />
      <Decoration
        zIndex={0}
        bottom={DECORATION_TWO.y}
        left={DECORATION_TWO.x}
        width={DECORATION_TWO.width}
        height={DECORATION_TWO.height}
        img={'./assets/vines/vine2.png'}
      />
      <Decoration
        zIndex={0}
        bottom={DECORATION_THREE.y}
        left={DECORATION_THREE.x}
        width={DECORATION_THREE.width}
        height={DECORATION_THREE.height}
        img={'./assets/vines/vine3.png'}
      />
      <Decoration
        zIndex={1}
        bottom={DECORATION_FOUR.y}
        left={DECORATION_FOUR.x}
        width={DECORATION_FOUR.width}
        height={DECORATION_FOUR.height}
        img={'./assets/rocks/rock3.png'}
      />
      <Decoration
        zIndex={0}
        bottom={DECORATION_FIVE.y}
        left={DECORATION_FIVE.x}
        width={DECORATION_FIVE.width}
        height={DECORATION_FIVE.height}
        img={'./assets/rocks/rock1.png'}
      />
      {/* <Decoration
        zIndex={0}
        bottom={DECORATION_SIX.y}
        left={DECORATION_SIX.x}
        width={DECORATION_SIX.width}
        height={DECORATION_SIX.height}
        img={'./assets/rocks/rock2.png'}
      /> */}
      <Decoration
        zIndex={1}
        bottom={DECORATION_SEVEN.y}
        left={DECORATION_SEVEN.x}
        width={DECORATION_SEVEN.width}
        height={DECORATION_SEVEN.height}
        img={'./assets/plants/plant1.png'}
      />
    </>
  );
}

