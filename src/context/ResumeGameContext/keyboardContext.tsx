import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useContext } from "react";
import { GameStats } from "./gameStatsContext";

interface IProps {
  children: ReactElement;
}

interface IGravityContext {
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

export const KeyboardContext = React.createContext({} as IGravityContext);

export const KeyboardContextProvider: FunctionComponent<IProps> = ({children}) => {
  const { END_GAME } = useContext(GameStats)
  
  const [isArrowRightPress, setIsArrowRightPress] = useState(false)
  const [isArrowLeftPress, setIsArrowLeftPress] = useState(false)
  const [isArrowUpPress, setIsArrowUpPress] = useState(false)
  const [isArrowDownPress, setIsArrowDownPress] = useState(false)
  const [isArrowSpacePress, setIsArrowSpacePress] = useState(false)

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