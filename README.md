Запланированный ход работ с оценкой предполагаемых временных затрат:
Оценка времени в {\_} общая на пункт, в [ ] на подпункт, в часах

1. Получить данные с сервера {1}

2. Придумать суть стейта: {1}

   - userArray -> что получили/ с этим работаем
   - displayedArray -> что выводим
   - isLoaded-> для экрана Skeleton
   - isCriticalError-> для экрана критической ошибки
   - isAlphabetSort-> для вывода сортировки по алфавиту или по дате рождения

3. Сделать скелет рабочей логики без красоты: {5}

   - input
   - кнопки отделов
   - вывод списка пользователей [1]
   - воплотить логику показа пользователей:
     - по алфавиту (по умолчанию) [1]
     - по дате рождения [1]
     - по отделам [1]
     - фильтрация по инпуту [1]

4. Когда всё работает, разбить все по компонентам React: {11}

   - Home /> получение данных с сервера и предварительная сортировка [1]
     - User /> компонент профиля человека [1]
     - UsersList /> компонент всех пользователей. конечная фильтрация и сортировка списка пользователей [2]
       - AppTopBar /> хедер компонент с инпутом и кнопками [1]
       - FilteredList /> вывод отсортированных пользователей [1]
         - Presentator /> компонент вывода одного из пользователей [1]
         - Modal /> всплывающее окно для выбора сортировки по алфавиту или по дате рождения [2]
         - EmptyScreen /> экран Skeleton [1]
         - CriticalError /> экран критической ошибки [1]

5. Использовать Figma для наведения красоты компонент {6}

6. Сделать верстку адаптивной {2}

7. Рефакторинг {?}

8. задача со звездочкой\* {?}

Примечания:

Возможно пункты 4, 5, 6 будут делаться совместно, поэтому затруднительно спрогнозировать уменьшение или увеличение времени на реализацию
