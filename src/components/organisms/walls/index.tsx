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
  const WALL_TOP: WallI  = {x: 70, y:390, width: 50, height: 250}
  const WALL_TOP_2: WallI  = {x: 280, y:390, width: 50, height: 250}
  const WALL_TOP_3: WallI  = {x: 500, y:390, width: 50, height: 250}
  const WALL_TOP_4: WallI  = {x: 700, y:390, width: 50, height: 250}

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
      <Wall
        rotate={90}
        bottom={WALL_TOP_3.y}
        left={WALL_TOP_3.x}
        width={WALL_TOP_3.width}
        height={WALL_TOP_3.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        rotate={90}
        bottom={WALL_TOP_4.y}
        left={WALL_TOP_4.x}
        width={WALL_TOP_4.width}
        height={WALL_TOP_4.height}
        img={'./assets/walls/wall1.png'}
      />
    </>
  );
}

