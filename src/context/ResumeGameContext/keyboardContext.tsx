import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useContext } from "react";
import { GameContext } from "./gameContext";

interface IProps {
  children: ReactElement;
}

interface IHeroMoveContext {
  isArrowRightPress: boolean;
  isArrowLeftPress: boolean;
  isArrowUpPress: boolean;
  isArrowDownPress: boolean;
  isArrowSpacePress: boolean;
  setIsArrowRightPress: (value: boolean) => void;
  setIsArrowLeftPress: (value: boolean) => void;
  setIsArrowUpPress: (value: boolean) => void;
  setIsArrowDownPress: (value: boolean) => void;
  setIsArrowSpacePress: (value: boolean) => void;
}

export const KeyboardContext = React.createContext({} as IHeroMoveContext);

export const KeyboardContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [isArrowRightPress, setIsArrowRightPress] = useState(false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState(false)
  const [isArrowUpPress, setIsArrowUpPress] = useState(false)
  const [isArrowDownPress, setIsArrowDownPress] = useState(false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState(false)
  const { END_GAME } = useContext(GameContext)

  useEffect(() => {
    setIsArrowRightPress(false)
    setIsArrowDownPress(false)
    setIsArrowLeftPress(false)
    setIsArrowSpacePress(false)
    setIsArrowUpPress(false)
  }, [END_GAME])

  return (
    <KeyboardContext.Provider value={{
      isArrowRightPress, isArrowLeftPress, isArrowUpPress, isArrowDownPress, isArrowSpacePress,
      setIsArrowRightPress, setIsArrowLeftPress, setIsArrowUpPress, setIsArrowDownPress, setIsArrowSpacePress
    }}>
      {children}
    </KeyboardContext.Provider>
  );
}