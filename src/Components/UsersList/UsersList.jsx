import React, { useState } from "react";
import CriticalError from "../CriticalError/CriticalError";
import AppTopBar from "../AppTopBar/AppTopBar";
import FilteredList from "../FilteredList/FilteredList";
import EmptyScreen from "../EmptyScreen/EmptyScreen";
import Modal from "../Modal/Modal";

function UsersList({
  usersArray,
  sortT,
  byName,
  byNow,
  displayedArray,
  setDisplayedArray,
  isLoaded,
  isFetchError,
  isAlphabetSort,
  setIsAlphabetSort,
  filteredArray,
  setFiltredArray,
}) {
  const [modalActive, setModalActive] = useState(false);

  function filterPersons(searchedDepartment) {
    const tempArr = usersArray.filter(
      (item) => item.department === searchedDepartment
    );
    setDisplayedArray(tempArr);
    setFiltredArray(tempArr);
  }

  function showAll() {
    setDisplayedArray(usersArray);
    setFiltredArray(usersArray);
  }

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };
  function onInput(event) {
    searchByName(event.target.value.toLowerCase());
  }

  let onChangeDebounced = debounce(onInput, 500);

  function searchByName(partName) {
    const tempArr = filteredArray.filter(
      (item) =>
        item.firstName.toLowerCase().startsWith(partName) ||
        item.userTag.toLowerCase().startsWith(partName)
    );
    setDisplayedArray(tempArr);
  }

  return (
    <div>
      <AppTopBar
        onChangeDebounced={onChangeDebounced}
        filterPersons={filterPersons}
        sortT={sortT}
        showAll={showAll}
        byName={byName}
        byNow={byNow}
        setModalActive={setModalActive}
      />
      {isLoaded && (
        <FilteredList
          displayedArray={displayedArray}
          isAlphabetSort={isAlphabetSort}
        />
      )}
      {isLoaded || <EmptyScreen />}
      {isFetchError && <CriticalError />}
      {modalActive && (
        <Modal
          isAlphabetSort={isAlphabetSort}
          setIsAlphabetSort={setIsAlphabetSort}
          modalActive={modalActive}
          setModalActive={setModalActive}
          sortT={sortT}
          byName={byName}
          byNow={byNow}
        />
      )}
    </div>
  );
}

export default UsersList;
