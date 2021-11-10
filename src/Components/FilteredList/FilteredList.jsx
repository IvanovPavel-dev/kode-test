import React from "react";
import { Link } from "react-router-dom";
import s from "./FilteredList.module.css";
import Presentator from "../Presentator/Presentator";

function FilteredList({ displayedArray, isAlfabetSort }) {
  return (
    <div className={s.wrapper}>
      {displayedArray.map((user) => (
        <Link key={user.id} to={`users/${user.id}`}>
          <Presentator user={user} isAlfabetSort={isAlfabetSort} />
        </Link>
      ))}
    </div>
  );
}

export default FilteredList;
