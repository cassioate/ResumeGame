import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  END_GAME: boolean;
  setEND_GAME: (value: boolean) => void;
}

export const GameContext = React.createContext({} as IHeroMoveContext);

export const GameContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [END_GAME, setEND_GAME] = useState(false)

  return (
    <GameContext.Provider value={{
      END_GAME, setEND_GAME
    }}>
      {children}
    </GameContext.Provider>
  );
}