import React from "react";
import s from "./Modal.module.css";
import cancel from "../img/cancel.png";
import Selected from "../img/Selected.png";

function Modal({ setModalActive, isAlphabetSort, setIsAlphabetSort }) {
  function toAlphabetSort() {
    setIsAlphabetSort(true);
    setModalActive(false);
  }

  function toBirthdaySort() {
    setIsAlphabetSort(false);
    setModalActive(false);
  }

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <div className={s.headerRow}>
          <div className={s.header}>Сортировка</div>
          <div
            className={s.cancel}
            onClick={() => {
              setModalActive(false);
            }}
          >
            <img src={cancel} className={s.cancelImg} alt="icon" />
          </div>
        </div>
        <div className={s.choise}>
          <div onClick={toAlphabetSort} className={s.line}>
            <div className={s.imgBox}>
              {isAlphabetSort && (
                <img src={Selected} className={s.img} alt="icon" />
              )}
            </div>
            <div className={s.text}>По алфавиту</div>
          </div>
          <div onClick={toBirthdaySort} className={s.line}>
            <div className={s.imgBox}>
              {isAlphabetSort || (
                <img src={Selected} className={s.img} alt="icon" />
              )}
            </div>
            <div className={s.text}>По дню рождения</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
