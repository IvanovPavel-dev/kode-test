import React, { useState, useEffect } from "react";
import * as axios from "axios";

function AppTopBar() {
  const [usersArray, setUsersArray] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);
  const [displayedArray, setDisplayedArray] = useState([]);
  // const [isAlfabetSort, setIsAlfabetSort] = useState(true);

  const options = {
    method: "GET",
    url: "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
    headers: {
      "Content-Type": "application/json",
      Prefer: "code=200, example=success",
      //   Prefer: 'code=500, example=error-500'
      //   Prefer: "code=200, dynamic=true",
    },
  };

  async function fetchUsers() {
    const response = await axios
      .request(options)
      .then(function (response) {
        const tempArr = response.data.items;
        setUsersArray(tempArr.sort(byName));
        setDisplayedArray(tempArr.sort(byName));
        setIsloaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  function filterPearsons(searchedDepartment) {
    const tempArr = usersArray.filter((item) => {
      return item.department === searchedDepartment;
    });
    setDisplayedArray(tempArr);
  }

  function showAll() {
    setDisplayedArray(usersArray);
  }

  function sort(typeFn) {
    const tempArr = [...usersArray].sort(typeFn);
    setDisplayedArray(tempArr);
    setUsersArray(tempArr);
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
    const tempArr = displayedArray.filter((item) => {
      return (
        item.firstName.toLowerCase().startsWith(partName) ||
        item.userTag.toLowerCase().startsWith(partName)
      );
    });
    setDisplayedArray(tempArr);
  }

  return (
    <div>
      <div>Поиск</div>
      <input
        type="text"
        placeholder="Введите имя, тег, почту..."
        required
        onChange={onChangeDebounced}
      />
      <div>
        <button onClick={showAll}>Все</button>
        <button
          onClick={() => {
            filterPearsons("design");
          }}
        >
          Дизайн
        </button>
        <button
          onClick={() => {
            filterPearsons("management");
          }}
        >
          Менеджмент
        </button>
        <button
          onClick={() => {
            filterPearsons("ios");
          }}
        >
          iOs
        </button>
        <button
          onClick={() => {
            filterPearsons("android");
          }}
        >
          Android
        </button>
        <button
          onClick={() => {
            filterPearsons("qa");
          }}
        >
          QA
        </button>
        <button
          onClick={() => {
            filterPearsons("back_office");
          }}
        >
          Бэк-офис
        </button>
        <button
          onClick={() => {
            filterPearsons("frontend");
          }}
        >
          Frontend
        </button>
        <button
          onClick={() => {
            filterPearsons("hr");
          }}
        >
          HR
        </button>
        <button
          onClick={() => {
            filterPearsons("pr");
          }}
        >
          PR
        </button>
        <button
          onClick={() => {
            filterPearsons("backend");
          }}
        >
          Backend
        </button>
        <button
          onClick={() => {
            filterPearsons("support");
          }}
        >
          Техподдержка
        </button>
        <button
          onClick={() => {
            filterPearsons("analytics");
          }}
        >
          Аналитика
        </button>
        <button
          onClick={() => {
            sort(byName);
          }}
        >
          sort a-b
        </button>
        <button
          onClick={() => {
            sort(byNow);
          }}
        >
          sort by date
        </button>
      </div>
      <div>
        {displayedArray.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.avatarUrl} />
              <div>
                {item.firstName +
                  " " +
                  item.lastName +
                  " " +
                  item.userTag +
                  " " +
                  item.birthday}
              </div>
              <div>{item.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppTopBar;
