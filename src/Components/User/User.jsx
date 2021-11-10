import React from "react";
import { useParams, useHistory } from "react-router-dom";
import backImg from "../img/Back.png";
import phoneImg from "../img/Phone.png";
import starImg from "../img/Star.png";
import s from "./User.module.css";

function User({ usersArray }) {
  let history = useHistory();
  const searchedId = useParams().id;
  const user = usersArray.find((item) => item.id.toString() === searchedId);
  const yearsOld = new Date().getFullYear() - user.birthday.slice(0, 4);

  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.topContainer}>
          <img
            onClick={history.goBack}
            className={s.back}
            src={backImg}
            alt="icon"
          />

          <img className={s.img} src={user.avatarUrl} alt="avatar" />
          <div className={s.textBlock}>
            <div className={s.name}>{user.firstName + " " + user.lastName}</div>
            <div className={s.tag}>{user.userTag.toLowerCase()}</div>
          </div>
          <div className={s.positionTag}>Designer</div>
        </div>
        <div className={s.birthdayBlock}>
          <div className={s.textBlock}>
            <img className={s.icon} src={starImg} alt="icon" />
            <div className={s.cardText}>{user.birthday}</div>
          </div>
          <div className={s.birhdayText}>{yearsOld + " Years Old"}</div>
        </div>
        <a href={`tel:+${user.phone}`}>
          <div className={s.phone}>
            <img className={s.icon} src={phoneImg} alt="icon" />
            <div className={s.cardText}>{user.phone}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default User;
