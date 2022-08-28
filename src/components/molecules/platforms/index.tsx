import React, { useState } from "react";
import { Platform1 } from "../../atoms/platform_1";
import { PlatformStyled } from "./styles";

export const Platforms = () => {
  // const [hero, setHero] = useState(0);
  // const {HERO_WIDTH, HERO_HEIGHT, POSITION_Y, POSITION_X, HERO_DIRECTION} = useContext(HeroMoveContext);

  return (
    <>
      {/* <PlatformStyled
      // bottom={POSITION_Y}
      // left={POSITION_X}
      // width={HERO_WIDTH}
      // height={HERO_HEIGHT}
      // direction={HERO_DIRECTION}
      // src={`./assets/hero/Chara - BlueIdle000${hero}.png`}
      /> */}
      <Platform1></Platform1>
    </>
  );
}

