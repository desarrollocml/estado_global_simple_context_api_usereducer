import { createContext, useReducer } from 'react';
import StoreReducer, { initialStore } from './StoreReducer';
const StoreContext = createContext();

export default function StoreProvider({children}) {
const [store, dispatch] = useReducer(StoreReducer, initialStore);


  return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
  )
}
export {StoreContext}