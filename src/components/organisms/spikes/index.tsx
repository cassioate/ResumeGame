/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../context/ResumeGameContext/gameContext";
import { HeroMoveContext } from "../../../context/ResumeGameContext/heroPropsContext";
import { HERO_SIZE_HEIGHT_HIT_BOX, HERO_SIZE_WIDTH_HIT_BOX, START_FLOOR, START_MAX_JUMP } from "../../../settings/constants";
import { Spike } from "../../atoms/spike";

interface SpikesI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Spikes = () => {
  const { POSITION_Y, POSITION_X, IN_PLATFORM, FLOOR, setIN_PLATFORM, setFLOOR, setMAX_JUMP} = useContext(HeroMoveContext)
  const { setEND_GAME } = useContext(GameContext)

  const SPIKE_ONE: SpikesI  = {x: 100, y:30, width: 60, height: 20}
  const SPIKE_TWO: SpikesI  = {x: 200, y:30, width: 60, height: 15}
  const SPIKE_THREE: SpikesI  = {x: 300, y:30, width: 30, height: 20}

  const platforms: SpikesI[] = [
    SPIKE_ONE,
    SPIKE_TWO,
    SPIKE_THREE
  ]
  
  const touchSpikeValidator: SpikesI[] = []
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
    console.log(touchSpikeValidator.length)
    if (touchSpikeValidator.length > 0) {
      console.log('TOQUEI')
      setEND_GAME(true)
    }
    console.log('N_TOQUEI')
  }, [POSITION_X, POSITION_Y])

  return (
    <>
      <Spike
        zIndex={1}
        bottom={SPIKE_ONE.y}
        left={SPIKE_ONE.x}
        width={SPIKE_ONE.width}
        height={SPIKE_ONE.height}
        img={'./assets/spikes/spike1.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_TWO.y}
        left={SPIKE_TWO.x}
        width={SPIKE_TWO.width}
        height={SPIKE_TWO.height}
        img={'./assets/spikes/spike2.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_THREE.y}
        left={SPIKE_THREE.x}
        width={SPIKE_THREE.width}
        height={SPIKE_THREE.height}
        img={'./assets/spikes/spike3.png'}
      />
    </>
  );
}

