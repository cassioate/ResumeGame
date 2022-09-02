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
  const DECORATION_THREE: DecorationsI  = {x: 350, y:0, width: 50, height: 600}

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
    </>
  );
}

