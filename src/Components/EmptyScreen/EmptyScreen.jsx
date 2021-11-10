import React from "react";
import s from "./EmptyScreen.module.css";
import EmptyUser from "./EmptyUser";

function EmptyScreen() {
  return (
    <div className={s.wrapper}>
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
      <EmptyUser />
    </div>
  );
}

export default EmptyScreen;
