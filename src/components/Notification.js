import React from "react";
import { useGlobalContext } from "../reducers/context";

const Notification = () => {
  const { state } = useGlobalContext();

  const { colorClass, txt } = state.notify;

  return <div className={`notification  ${colorClass}`}>{txt}</div>;
};

export default Notification;
