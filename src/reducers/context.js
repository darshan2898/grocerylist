import React, { useContext, useReducer, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ACTIONS from "./actions";
import reducer from "./reducers";

const AppContext = React.createContext();

const initialState = {
  items: [],
  notify: {
    status: false,
    colorClass: "",
    txt: "",
  },
  edit: {
    status: false,
    data: {},
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isEdit, setIsEdit] = useState("");

  //ADD DATA IN LIST
  const addData = (item) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
  };

  //DELETE DATA
  const deleteItem = (item) => {
    dispatch({ type: ACTIONS.DELETE_ITEM, payload: item });
  };

  //EDIT ITEM CLICK ACTION
  const editItem = (item) => {
    dispatch({ type: ACTIONS.EDIT_IEM, payload: item });
  };

  useEffect(() => {
    setIsEdit(state.edit.data.item);
  }, [state.edit.status]);

  const editedItem = (item) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
    deleteItem(state.edit.data.id);
    dispatch({ type: ACTIONS.CLOSE_EDIT });
  };

  //SHOW NOTIFICATION
  const showNotification = (item) => {
    dispatch({ type: ACTIONS.SHOW_NOT, payload: item });
  };

  //HIDE NOTIFICATION
  useEffect(() => {
    if (state.notify.status) {
      setTimeout(() => {
        dispatch({ type: ACTIONS.HIDE_NOT });
      }, 1500);
    }
  }, [state.items]);

  // CLOSE EDIT COMPONENT
  const closeEdit = () => {
    dispatch({ type: ACTIONS.CLOSE_EDIT });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addData,
        deleteItem,
        editItem,
        isEdit,
        setIsEdit,
        closeEdit,
        editedItem,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
