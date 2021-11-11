import React from "react";
import searchImg from "../img/Search.png";
import filterImg from "../img/Filter.png";
import s from "./AppTopBar.module.css";

function AppTopBar({
  onChangeDebounced,
  filterPersons,
  showAll,
  setModalActive,
}) {
  const departments = [
    { id: "design", name: "Дизайн" },
    { id: "management", name: "Менеджмент" },
    { id: "ios", name: "iOs" },
    { id: "android", name: "Android" },
    { id: "qa", name: "QA" },
    { id: "back_office", name: "Бэк-офис" },
    { id: "frontend", name: "Frontend" },
    { id: "hr", name: "HR" },
    { id: "pr", name: "PR" },
    { id: "backend", name: "Backend" },
    { id: "support", name: "Техподдержка" },
    { id: "analytics", name: "Аналитика" },
  ];

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
        {departments.map(({ id, name }) => (
          <button
            key={id}
            className={s.button}
            onClick={() => {
              filterPersons(id);
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppTopBar;
