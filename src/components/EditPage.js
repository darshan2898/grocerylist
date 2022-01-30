import React from "react";
import { useGlobalContext } from "../reducers/context";
import { valueEdit } from "../notValues";

const EditPage = () => {
  const { isEdit, setIsEdit, showNotification, closeEdit, editedItem } =
    useGlobalContext();

  const eventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit_page">
      <form
        onSubmit={(e) => {
          eventHandler(e);
          editedItem(isEdit);
          showNotification(valueEdit);
        }}
      >
        <input
          type="text"
          value={isEdit}
          onChange={(e) => {
            setIsEdit(e.target.value);
          }}
        />
        <div className="btn">
          <button type="submit">Edit</button>
          <button
            type="button"
            onClick={() => {
              closeEdit();
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
