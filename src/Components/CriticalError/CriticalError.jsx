import React from "react";
import s from "./CriticalError.module.css";
import ufo from "../img/ufo.png";

function CriticalError() {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={ufo} alt="ufo" />
      <div className={s.header}>Какой-то сверхразум все сломал</div>
      <div className={s.text}>Постараемся быстро починить</div>
      <div onClick="history.go(0)" className={s.refresh}>
        Попробовать снова
      </div>
    </div>
  );
}

export default CriticalError;
