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

  const SPIKE_ONE: SpikesI  = {x: 550, y:10, width: 150, height: 40}
  const SPIKE_TWO: SpikesI  = {x: 550, y:10, width: 150, height: 30}
  const SPIKE_THREE: SpikesI  = {x: 550, y:10, width: 100, height: 40}
  const SPIKE_FOUR: SpikesI  = {x: 550, y:20, width: 150, height: 40}
  const SPIKE_FIVE: SpikesI  = {x: 500, y:20, width: 150, height: 30}
  const SPIKE_SIX: SpikesI  = {x: 500, y:10, width: 100, height: 40}

  const SPIKE_ONE_2: SpikesI  = {x: 600, y:10, width: 150, height: 40}
  const SPIKE_TWO_2: SpikesI  = {x: 650, y:10, width: 150, height: 30}
  const SPIKE_THREE_2: SpikesI  = {x: 650, y:10, width: 60, height: 40}
  const SPIKE_FOUR_2: SpikesI  = {x: 650, y:10, width: 120, height: 40}
  const SPIKE_FIVE_2: SpikesI  = {x: 700, y:10, width: 120, height: 30}
  const SPIKE_SIX_2: SpikesI  = {x: 700, y:10, width: 60, height: 40}

  const platforms: SpikesI[] = [
    // SPIKE_ONE,
    // SPIKE_TWO,
    // SPIKE_THREE
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
      setEND_GAME(true)
    }
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
      <Spike
        zIndex={1}
        bottom={SPIKE_FOUR.y}
        left={SPIKE_ONE.x}
        width={SPIKE_ONE.width}
        height={SPIKE_ONE.height}
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
        bottom={SPIKE_ONE_2.y}
        left={SPIKE_ONE_2.x}
        width={SPIKE_ONE_2.width}
        height={SPIKE_ONE_2.height}
        img={'./assets/spikes/spike1.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_TWO_2.y}
        left={SPIKE_TWO_2.x}
        width={SPIKE_TWO_2.width}
        height={SPIKE_TWO_2.height}
        img={'./assets/spikes/spike2.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_THREE_2.y}
        left={SPIKE_THREE_2.x}
        width={SPIKE_THREE_2.width}
        height={SPIKE_THREE_2.height}
        img={'./assets/spikes/spike3.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_FOUR_2.y}
        left={SPIKE_ONE_2.x}
        width={SPIKE_ONE_2.width}
        height={SPIKE_ONE_2.height}
        img={'./assets/spikes/spike1.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_FIVE_2.y}
        left={SPIKE_FIVE_2.x}
        width={SPIKE_FIVE_2.width}
        height={SPIKE_FIVE_2.height}
        img={'./assets/spikes/spike2.png'}
      />
      <Spike
        zIndex={1}
        bottom={SPIKE_SIX_2.y}
        left={SPIKE_SIX_2.x}
        width={SPIKE_SIX_2.width}
        height={SPIKE_SIX_2.height}
        img={'./assets/spikes/spike3.png'}
      />
    </>
  );
}

