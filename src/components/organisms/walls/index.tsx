/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Wall } from "../../atoms/wall";

interface WallI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Walls = () => {
  const WALL_LEFT_1: WallI  = {x: -45, y:200, width: 50, height: 300}
  const WALL_LEFT_2: WallI  = {x: -45, y:-30, width: 50, height: 300}
  const WALL_RIGHT_1: WallI  = {x: 780, y:-30, width: 50, height: 300}
  const WALL_RIGHT_2: WallI  = {x: 780, y:200, width: 50, height: 300}
  // const WALL_RIGHT_3: WallI  = {x: 780, y:0, width: 50, height: 300}
  const WALL_TOP: WallI  = {x: 140, y:300, width: 100, height: 450}
  const WALL_TOP_2: WallI  = {x: 550, y:300, width: 100, height: 450}

  return (
    <>
      <Wall
        bottom={WALL_LEFT_1.y}
        left={WALL_LEFT_1.x}
        width={WALL_LEFT_1.width}
        height={WALL_LEFT_1.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        bottom={WALL_LEFT_2.y}
        left={WALL_LEFT_2.x}
        width={WALL_LEFT_2.width}
        height={WALL_LEFT_2.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        bottom={WALL_RIGHT_1.y}
        left={WALL_RIGHT_1.x}
        width={WALL_RIGHT_1.width}
        height={WALL_RIGHT_1.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        bottom={WALL_RIGHT_2.y}
        left={WALL_RIGHT_2.x}
        width={WALL_RIGHT_2.width}
        height={WALL_RIGHT_2.height}
        img={'./assets/walls/wall1.png'}
      />

      <Wall
        rotate={90}
        bottom={WALL_TOP.y}
        left={WALL_TOP.x}
        width={WALL_TOP.width}
        height={WALL_TOP.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        rotate={90}
        bottom={WALL_TOP_2.y}
        left={WALL_TOP_2.x}
        width={WALL_TOP_2.width}
        height={WALL_TOP_2.height}
        img={'./assets/walls/wall1.png'}
      />
    </>
  );
}

