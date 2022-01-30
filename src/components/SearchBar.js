import React, { useRef } from "react";
import Notification from "./Notification";
import { useGlobalContext } from "../reducers/context";
import { valueSuccess } from "../notValues";

const SearchBar = () => {
  const inputEl = useRef("");
  const { addData, state, showNotification } = useGlobalContext();

  const eventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {state.notify.status && <Notification />}
      <form
        className="search_bar"
        onSubmit={(e) => {
          eventHandler(e);
          if (inputEl.current.value) {
            addData(inputEl.current.value);
            inputEl.current.value = "";
            showNotification(valueSuccess);
          } else {
            alert("Please enter something !");
          }
        }}
      >
        <input type="text" ref={inputEl} />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default SearchBar;
