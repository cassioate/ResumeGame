import React, { FunctionComponent, ReactElement, useState } from "react";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
  END_GAME: boolean;
  CONGRATULATIONS: boolean;
  setEND_GAME: (value: boolean) => void;
  setCONGRATULATIONS: (value: boolean) => void;
}

export const GameStats = React.createContext({} as IGravityContext);

export const GameStatsProvider: FunctionComponent<IProps> = ({children}) => {
  const [END_GAME, setEND_GAME] = useState(false)
  const [CONGRATULATIONS, setCONGRATULATIONS] = useState(false)

  return (
    <GameStats.Provider value={{
      END_GAME, CONGRATULATIONS, setEND_GAME, setCONGRATULATIONS
    }}>
      {children}
    </GameStats.Provider>
  );
}