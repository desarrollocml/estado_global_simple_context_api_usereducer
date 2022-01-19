import { createContext, useContext, useReducer } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";
const StoreContext = createContext();

export default function StoreProvider({ children }) {
  return (
    <StoreContext.Provider value={useReducer(StoreReducer, initialStore)}>
      {children}
    </StoreContext.Provider>
  );
}

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
