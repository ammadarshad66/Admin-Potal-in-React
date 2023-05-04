import { createContext } from "react";
import { initialStates } from "../config";

const AppContext = createContext(initialStates);

export default AppContext;
