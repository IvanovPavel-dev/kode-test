import React from "react";
import s from "./Presentator.module.css";

function getMonth(value) {
  return (
    {
      "01": "янв",
      "02": "фев",
      "03": "мар",
      "04": "апр",
      "05": "мая",
      "06": "июн",
      "07": "июл",
      "08": "авг",
      "09": "сен",
      10: "окт",
      11: "ноя",
      12: "дек",
    }[value] || "unknown"
  );
}

function Presentator({ user, isAlphabetSort }) {
  const day = user.birthday.slice(8, 10);
  const monthNum = user.birthday.slice(5, 7);

  const month = getMonth(monthNum);
  return (
    <div className={s.wrapper}>
      <div className={s.leftBlock}>
        <img className={s.avatar} src={user.avatarUrl} alt="avatar" />
        <div className={s.textBlock}>
          <div className={s.nameTeg}>
            <div className={s.name}>{user.firstName + " " + user.lastName}</div>
            <div className={s.teg}>{user.userTag.toLowerCase()}</div>
          </div>
          <div className={s.position}>{user.position}</div>
        </div>
      </div>
      <div className={s.birthday}>{isAlphabetSort || day + " " + month}</div>
    </div>
  );
}

export default Presentator;
