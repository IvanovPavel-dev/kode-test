import React from "react";
import s from "./EmptyUser.module.css";
import Aratar404 from "../img/Aratar404.png";
import LargeBar from "../img/LargeBar.png";
import SmallBar from "../img/SmallBar.png";

function EmptyUser() {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={Aratar404} alt="icon" />
      <div className={s.emtyData}>
        <img className={s.line} src={LargeBar} alt="icon" />
        <img className={s.line} src={SmallBar} alt="icon" />
      </div>
    </div>
  );
}

export default EmptyUser;
