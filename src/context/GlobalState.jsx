import { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteButton = (id) => {
    dispatch({
      type: "DELETE_BUTTON",
      payload: id,
    });
  };

   const addButton = (id) => {
     dispatch({
       type: "ADD_BUTTON",
       payload: id,
     });
   };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteButton, addButton }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
