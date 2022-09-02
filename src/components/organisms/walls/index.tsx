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
  const WALL_LEFT: WallI  = {x: -45, y:-80, width: 50, height: 600}
  const WALL_RIGHT: WallI  = {x: 780, y:-80, width: 50, height: 600}
  const WALL_TOP: WallI  = {x: 140, y:300, width: 100, height: 450}
  const WALL_TOP_2: WallI  = {x: 550, y:300, width: 100, height: 450}

  return (
    <>
      <Wall
        bottom={WALL_LEFT.y}
        left={WALL_LEFT.x}
        width={WALL_LEFT.width}
        height={WALL_LEFT.height}
        img={'./assets/walls/wall1.png'}
      />
      <Wall
        bottom={WALL_RIGHT.y}
        left={WALL_RIGHT.x}
        width={WALL_RIGHT.width}
        height={WALL_RIGHT.height}
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

