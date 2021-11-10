import React, { useEffect, useState } from "react";
import * as axios from "axios";
import { Route } from "react-router-dom";
import UsersList from "../UsersList/UsersList";
import User from "../User/User";

function Home() {
  const [usersArray, setUsersArray] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);
  const [displayedArray, setDisplayedArray] = useState([]);
  const [isFetchError, setIsFetchError] = useState(false);
  const [isAlfabetSort, setIsAlfabetSort] = useState(true);
  const [fildredArray, setFiltredArray] = useState([]);
  const options = {
    method: "GET",
    url: "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
    headers: {
      "Content-Type": "application/json",
      Prefer: "code=200, example=success",
      // Prefer: "code=200, dynamic=true",
      // Prefer: "code=500, example=error-500",
    },
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios
        .request(options)
        .then(function (response) {
          const tempArr = response.data.items;
          setUsersArray(tempArr.sort(byName));
          setDisplayedArray(tempArr.sort(byName));
          setFiltredArray(tempArr.sort(byName));
          setIsloaded(true);
        })
        .catch(function (error) {
          console.error(error);
          setIsFetchError(true);
          setIsloaded(true);
        });
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    isAlfabetSort ? sortT(byName) : sortT(byNow);
  }, [isAlfabetSort]);

  function sortT(typeFn) {
    const tempArr = [...usersArray].sort(typeFn);
    setDisplayedArray(tempArr);
    setUsersArray(tempArr);
    setFiltredArray(tempArr);
  }

  function getNextBirthday(date) {
    let currentDate = new Date();
    let birthday = new Date(date);
    birthday.setFullYear(currentDate.getFullYear());
    if (birthday - currentDate < 0) {
      birthday.setFullYear(currentDate.getFullYear() + 1);
    }
    return birthday;
  }
  function byNow(a, b) {
    return getNextBirthday(a.birthday) - getNextBirthday(b.birthday);
  }

  function byName(a, b) {
    if (a.firstName > b.firstName) {
      return 1;
    }
    if (a.firstName < b.firstName) {
      return -1;
    }
    return 0;
  }
  return (
    <div>
      <Route
        path="/users"
        render={() => (
          <UsersList
            usersArray={usersArray}
            setUsersArray={setUsersArray}
            displayedArray={displayedArray}
            setDisplayedArray={setDisplayedArray}
            isLoaded={isLoaded}
            isFetchError={isFetchError}
            sortT={sortT}
            byNow={byNow}
            byName={byName}
            setIsAlfabetSort={setIsAlfabetSort}
            isAlfabetSort={isAlfabetSort}
            fildredArray={fildredArray}
            setFiltredArray={setFiltredArray}
          />
        )}
        exact
      />
      <Route
        path="/users/:id"
        render={() => <User usersArray={usersArray} />}
        exact
      />
    </div>
  );
}

export default Home;
