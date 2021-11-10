import React from "react";
import s from "./Presentator.module.css";

function Presentator({ user, isAlfabetSort }) {
  const day = user.birthday.slice(8, 10);
  const monthNum = user.birthday.slice(5, 7);
  function getMonth(value) {
    let answer = "";
    switch (value) {
      case "01":
        answer = "янв";
        break;
      case "02":
        answer = "фев";
        break;
      case "03":
        answer = "мар";
        break;
      case "04":
        answer = "апр";
        break;
      case "05":
        answer = "мая";
        break;
      case "06":
        answer = "июн";
        break;
      case "07":
        answer = "июл";
        break;
      case "08":
        answer = "авг";
        break;
      case "09":
        answer = "сен";
        break;
      case "10":
        answer = "окт";
        break;
      case "11":
        answer = "ноя";
        break;
      case "12":
        answer = "дек";
        break;

      default:
        answer = "unnknuwn";
    }
    return answer;
  }
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
      <div className={s.birthday}>{isAlfabetSort || day + " " + month}</div>
    </div>
  );
}

export default Presentator;
