/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../context/ResumeGameContext/gameContext";
import { GravityContext } from "../../../context/ResumeGameContext/gravityContext";
import { HERO_SIZE_WIDTH_HIT_BOX } from "../../../settings/constants";
import { Spike } from "../../atoms/spike";

interface SpikesI {
  x: number,
  y: number,
  width: number,
  height: number
}

export const Spikes = () => {
  const { POSITION_Y, POSITION_X} = useContext(GravityContext)
  const { setEND_GAME } = useContext(GameContext)

  const SPIKE_ONE: SpikesI  = {x: 500, y:10, width: 100, height: 50}
  const SPIKE_TWO: SpikesI  = {x: 600, y:20, width: 75, height: 40}
  const SPIKE_THREE: SpikesI  = {x: 650, y:20, width: 45, height: 40}

  const SPIKE_FOUR: SpikesI  = {x: 700, y:10, width: 100, height: 50}
  const SPIKE_FIVE: SpikesI  = {x: 680, y:20, width: 75, height: 40}
  const SPIKE_SIX: SpikesI  = {x: 500, y:10, width: 45, height: 40}
  const SPIKE_SEVEN: SpikesI  = {x: 580, y:20, width: 45, height: 40}

  const platforms: SpikesI[] = [
    SPIKE_ONE,
    SPIKE_TWO,
    SPIKE_THREE,
    SPIKE_FOUR,
    SPIKE_FIVE,
    SPIKE_SIX,
    SPIKE_SEVEN
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
    if (touchSpikeValidator.length > 0) {
      setEND_GAME(true)
    }
  }, [POSITION_X, POSITION_Y])

  return (
    <>
      <Spike
        zIndex={2}
        bottom={SPIKE_ONE.y}
        left={SPIKE_ONE.x}
        width={SPIKE_ONE.width}
        height={SPIKE_ONE.height}
        img={'./assets/spikes/spike1.png'}
      />
      <Spike
        zIndex={2}
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

      <Spike
        zIndex={1}
        bottom={SPIKE_FOUR.y}
        left={SPIKE_FOUR.x}
        width={SPIKE_FOUR.width}
        height={SPIKE_FOUR.height}
        img={'./assets/spikes/spike1.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_FIVE.y}
        left={SPIKE_FIVE.x}
        width={SPIKE_FIVE.width}
        height={SPIKE_FIVE.height}
        img={'./assets/spikes/spike2.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_SIX.y}
        left={SPIKE_SIX.x}
        width={SPIKE_SIX.width}
        height={SPIKE_SIX.height}
        img={'./assets/spikes/spike3.png'}
      />

      <Spike
        zIndex={1}
        bottom={SPIKE_SEVEN.y}
        left={SPIKE_SEVEN.x}
        width={SPIKE_SEVEN.width}
        height={SPIKE_SEVEN.height}
        img={'./assets/spikes/spike3.png'}
      />
    </>
  );
}

