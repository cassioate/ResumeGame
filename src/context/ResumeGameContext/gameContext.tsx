import React, { FunctionComponent, ReactElement, useState } from "react";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
  END_GAME: boolean;
  setEND_GAME: (value: boolean) => void;
}

export const GameContext = React.createContext({} as IGravityContext);

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