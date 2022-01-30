const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newDate = new Date();
    return {
      ...state,
      items: [
        ...state.items,
        { item: action.payload, id: newDate.getTime().toString() },
      ],
    };
  }

  if (action.type === "DELETE_ITEM") {
    const newDeletedData = state.items.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      items: [...newDeletedData],
    };
  }

  if (action.type === "EDIT_IEM") {
    const editData = state.items.find((item) => {
      return item.id === action.payload;
    });
    return {
      ...state,
      edit: { status: true, data: editData },
    };
  }

  if (action.type === "SHOW_NOT") {
    return { ...state, notify: { ...action.payload } };
  }

  if (action.type === "HIDE_NOT") {
    return {
      ...state,
      notify: { status: false },
    };
  }

  if (action.type === "CLOSE_EDIT") {
    return { ...state, edit: { ...state.edit, status: false } };
  }

  return state;
};

export default reducer;
