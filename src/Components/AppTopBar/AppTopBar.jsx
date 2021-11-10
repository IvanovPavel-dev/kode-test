import React from "react";
import searchImg from "../img/Search.png";
import filterImg from "../img/Filter.png";
import s from "./AppTopBar.module.css";

function AppTopBar({
  onChangeDebounced,
  filterPearsons,
  showAll,
  setModalActive,
}) {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>Поиск</div>
      <div className={s.InputBar}>
        <div className={s.inputSearch}>
          <img className={s.iconSearch} src={searchImg} alt="icon" />
          <input
            className={s.inputText}
            type="text"
            placeholder="Введите имя, тег, почту..."
            required
            onChange={onChangeDebounced}
          />
        </div>
        <img
          alt="icon"
          className={s.iconFilter}
          src={filterImg}
          onClick={() => {
            setModalActive(true);
          }}
        />
      </div>

      <div className={s.buttonsRow}>
        <button className={s.button} onClick={showAll}>
          Все
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("design");
          }}
        >
          Дизайн
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("management");
          }}
        >
          Менеджмент
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("ios");
          }}
        >
          iOs
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("android");
          }}
        >
          Android
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("qa");
          }}
        >
          QA
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("back_office");
          }}
        >
          Бэк-офис
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("frontend");
          }}
        >
          Frontend
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("hr");
          }}
        >
          HR
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("pr");
          }}
        >
          PR
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("backend");
          }}
        >
          Backend
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("support");
          }}
        >
          Техподдержка
        </button>
        <button
          className={s.button}
          onClick={() => {
            filterPearsons("analytics");
          }}
        >
          Аналитика
        </button>
      </div>
    </div>
  );
}

export default AppTopBar;
