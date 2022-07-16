import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  transactions: [],
};



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

const delTransaction=((id)=>{
   dispatch({type:"DEL_TRANSACTION", payload:id})
})

const addTransaction=((transaction)=>{
   dispatch({type:"ADD_TRANSACTION", payload:transaction})
})
  return <AppContext.Provider value=
  {{
   ...state,
   delTransaction,
   addTransaction,
  }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
