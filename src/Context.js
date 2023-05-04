import React, { useContext, useReducer } from "react";
import AppContext from "./context/Context";
import { initialStates } from "./config";
import { configReducer } from "./configReducer";

export const useApi = () => useContext(AppContext);

const Context = (props) => {
  const configState = {
    isCompletion: initialStates.isCompletion,
    user: initialStates.isCompletion,
    serverError: initialStates.serverError,
  };
  const [config, configDispatch] = useReducer(configReducer, configState);
  const setConfig = (key, value) => {
    configDispatch({
      type: "SET_CONFIG",
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <AppContext.Provider value={{ config, setConfig, configDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
