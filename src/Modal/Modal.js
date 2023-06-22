import React from "react";

export const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"} // если active равен true, то в таком случае мы добавляем два класса: modal и active. В ином случае - только класс modal
      onClick={() => setActive(false)} // Создаем слушатель обработки клика, а функция setActive будет менять значение active с true на false
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()} // stopPropogation для того, чтобы окно не закрывалось при клике на само окно непосредственно
      >
        {children}
      </div>
    </div>
  );
};
