import React, { useState, useEffect } from "react";
import * as axios from "axios";

function AppTopBar() {
  const [usersArray, setUsersArray] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);
  const [displayedArray, setDisplayedArray] = useState([]);
  const [isAlfabetSort, setIsAlfabetSort] = useState(true);
  // const [isBirhdateSort, setIsBirhdateSor] = useState(false);

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
        setUsersArray(tempArr);
        setDisplayedArray(tempArr);
        setIsloaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>Поиск</div>
      <input type="text" placeholder="Введите имя, тег, почту..." />
      <div>
        <button>Все</button>
        <button>Дизайн</button>
        <button>Менеджмент</button>
        <button>iOs</button>
        <button>Android</button>
        <button>QA</button>
        <button>Бэк-офис</button>
        <button>Frontend</button>
        <button>HR</button>
        <button>PR</button>
        <button>Backend</button>
        <button>Техподдержка</button>
        <button>Аналитика</button>
        <button>sort a-b</button>
        <button>sort by date</button>
      </div>
      <div>
        {usersArray.map((item) => {
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
