/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GameStats } from "../../../context/ResumeGameContext/gameStatsContext";
import { GravityContext } from "../../../context/ResumeGameContext/gravityContext";
import { HERO_SIZE_WIDTH_HIT_BOX } from "../../../settings/constants";
import { Spike } from "../../atoms/spike";

interface ObjectI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const GenericTakeObjects = () => {
  const { POSITION_Y, POSITION_X} = useContext(GravityContext)
  const { setEND_GAME, setCONGRATULATIONS } = useContext(GameStats)

  const RESUME_OBJECT: ObjectI  = {x: 750, y:430, width: 20, height: 30}

  const platforms: ObjectI[] = [
    RESUME_OBJECT
  ]
  
  const touchSpikeValidator: ObjectI[] = []
  useEffect(() => {
    platforms.forEach((spike) => {
      if (
        POSITION_X + HERO_SIZE_WIDTH_HIT_BOX >= spike.x && 
        POSITION_X <= spike.x + spike.width &&

        POSITION_Y + HERO_SIZE_WIDTH_HIT_BOX >= spike.y &&
        POSITION_Y <= spike.y + spike.height
        ) {
          touchSpikeValidator.push(spike)
      }
    })
    if (touchSpikeValidator.length > 0) {
      // alert('teste')
      setEND_GAME(false)
      setCONGRATULATIONS(true)
    }
  }, [POSITION_X, POSITION_Y])

  return (
    <>
      <Spike
        zIndex={2}
        bottom={RESUME_OBJECT.y}
        left={RESUME_OBJECT.x}
        width={RESUME_OBJECT.width}
        height={RESUME_OBJECT.height}
        img={'./assets/resume/paper.png'}
      />
    </>
  );
}

