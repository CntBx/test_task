import React from "react";
import my_photo from "../photos/my_photo.jpg";
import Rectangle from "../photos/Rectangle.png";
import moscow_transport2 from "../photos/moscow_transport2.png";

export const Home = () => {
  return (
    <div>
      <img
        className="myself"
        alt="Мое фото"
        src={my_photo}
        width={211}
        height={211}
      />
      <div className="right">
        <strong> ФИО: Иванов Максим Сергеевич.</strong> <br />{" "}
        <b>Дата рождения: 27.05.2000. </b>
        <p>
          Я начинающий веб-разработчик с фокусом на фронтенд-разработке. Мои
          главные навыки включают JavaScript, TypeScript, React, HTML и CSS.
          Владею знаниями UNIX-подобных систем, в частности пользовался Linux. В
          вёрстке в основном использую flex, но также знаком с grid и могу
          применять на практике.
        </p>
        <p>
          Очень замотивирован в развитии навыков и умений фронтенд-разработчика.
          Поставил перед собой цель стать серьезным специалистом в этой области
          (не ниже middle-уровня). Очень уважаю людей, которые являются
          мастерами своего дела, в т.ч. программистов, ведь программирование
          требует больших умений и крепкого терпения. Надеюсь найти свое
          призвание именно в этой отрасли.
        </p>
      </div>
      <img
        className="Rectangle"
        alt="Прямоугольник"
        src={Rectangle}
        width={1520}
        height={675}
      />
      <img
        className="moscow_transport2"
        alt="Московский Метрополитен"
        src={moscow_transport2}
        width={79}
        height={77}
      />
    </div>
  );
};
