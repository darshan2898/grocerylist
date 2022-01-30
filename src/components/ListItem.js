import React from "react";
import { useGlobalContext } from "../reducers/context";
import { GiTrashCan, GiPencil } from "react-icons/gi";
import { valueDelete } from "../notValues";

const ListItem = () => {
  const { state, deleteItem, editItem, showNotification } = useGlobalContext();

  const itemsArr = () => {
    const listItems = state.items.map((item) => {
      return (
        <li key={item.id}>
          <span>{item.item}</span>
          <span>
            <h3
              onClick={() => {
                editItem(item.id);
              }}
            >
              <GiPencil />
            </h3>
            <h3
              onClick={() => {
                deleteItem(item.id);
                showNotification(valueDelete);
              }}
            >
              <GiTrashCan />
            </h3>
          </span>
        </li>
      );
    });
    return listItems;
  };
  return <>{itemsArr()}</>;
};

export default ListItem;
