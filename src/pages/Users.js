import React, { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal.js";

export const Users = () => {
  const [todos, setTodos] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalActive_1, setModalActive_1] = useState(false);
  const [modalActive_2, setModalActive_2] = useState(false);
  const [modalActive_3, setModalActive_3] = useState(false);
  const [modalActive_4, setModalActive_4] = useState(false);
  const [modalActive_5, setModalActive_5] = useState(false);
  const [modalActive_6, setModalActive_6] = useState(false);
  const [modalActive_7, setModalActive_7] = useState(false);
  const [modalActive_8, setModalActive_8] = useState(false);
  const [modalActive_9, setModalActive_9] = useState(false);
  // создаем useState'ы чтобы менять состояния модальных окон

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // мы указываем пустой массив зависимостей [] потому, что хотим получить данные из API только один раз

  return (
    <main>
      <section>
        <ul className="elem-2">
          <li className="header">
            <p>
              <strong>ФИО</strong>
            </p>
            <p>
              <strong>Email</strong>
            </p>
          </li>
          <li className="id" onClick={() => setModalActive(true)}>
            Name: {todos[0]?.name} <br />
            Username: {todos[0]?.username} <br />
            Phone: {todos[0]?.phone}
            <p className="email">Email: {todos[0]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_1(true)}>
            Name: {todos[1]?.name} <br />
            Username: {todos[1]?.username} <br />
            Phone: {todos[1]?.phone}
            <p className="email">Email: {todos[1]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_2(true)}>
            Name: {todos[2]?.name} <br />
            Username: {todos[2]?.username} <br />
            Phone: {todos[2]?.phone}
            <p className="email">Email: {todos[2]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_3(true)}>
            Name: {todos[3]?.name} <br />
            Username: {todos[3]?.username} <br />
            Phone: {todos[3]?.phone}
            <p className="email">Email: {todos[3]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_4(true)}>
            Name: {todos[4]?.name} <br />
            Username: {todos[4]?.username} <br />
            Phone: {todos[4]?.phone}
            <p className="email">Email: {todos[4]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_5(true)}>
            Name: {todos[5]?.name} <br />
            Username: {todos[5]?.username} <br />
            Phone: {todos[5]?.phone}
            <p className="email">Email: {todos[5]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_6(true)}>
            Name: {todos[6]?.name} <br />
            Username: {todos[6]?.username} <br />
            Phone: {todos[6]?.phone}
            <p className="email">Email: {todos[6]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_7(true)}>
            Name: {todos[7]?.name} <br />
            Username: {todos[7]?.username} <br />
            Phone: {todos[7]?.phone}
            <p className="email">Email: {todos[7]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_8(true)}>
            Name: {todos[8]?.name} <br />
            Username: {todos[8]?.username} <br />
            Phone: {todos[8]?.phone}
            <p className="email">Email: {todos[8]?.email}</p>
          </li>
          <li className="id" onClick={() => setModalActive_9(true)}>
            Name: {todos[9]?.name} <br />
            Username: {todos[9]?.username} <br />
            Phone: {todos[9]?.phone}
            <p className="email">Email: {todos[9]?.email}</p>
          </li>
        </ul>
      </section>

      <div className="modality">
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №1</h3>
          <p>
            Name: {todos[0]?.name} <br />
            Username: {todos[0]?.username}
            <br />
            Email: {todos[0]?.email}
            <br />
            Phone: {todos[0]?.phone} <br />
            Website: {todos[0]?.website} <br />
            Company: {todos[0]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_1} setActive={setModalActive_1}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №2</h3>
          <p>
            Name: {todos[1]?.name} <br />
            Username: {todos[1]?.username}
            <br />
            Email: {todos[1]?.email}
            <br />
            Phone: {todos[1]?.phone} <br />
            Website: {todos[1]?.website} <br />
            Company: {todos[1]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_2} setActive={setModalActive_2}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №3</h3>
          <p>
            Name: {todos[2]?.name} <br />
            Username: {todos[2]?.username}
            <br />
            Email: {todos[2]?.email}
            <br />
            Phone: {todos[2]?.phone} <br />
            Website: {todos[2]?.website} <br />
            Company: {todos[2]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_3} setActive={setModalActive_3}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №4</h3>
          <p>
            Name: {todos[3]?.name} <br />
            Username: {todos[3]?.username}
            <br />
            Email: {todos[3]?.email}
            <br />
            Phone: {todos[3]?.phone} <br />
            Website: {todos[3]?.website} <br />
            Company: {todos[3]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_4} setActive={setModalActive_4}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №5</h3>
          <p>
            Name: {todos[4]?.name} <br />
            Username: {todos[4]?.username}
            <br />
            Email: {todos[4]?.email}
            <br />
            Phone: {todos[4]?.phone} <br />
            Website: {todos[4]?.website} <br />
            Company: {todos[4]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_5} setActive={setModalActive_5}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №6</h3>
          <p>
            Name: {todos[5]?.name} <br />
            Username: {todos[5]?.username}
            <br />
            Email: {todos[5]?.email}
            <br />
            Phone: {todos[5]?.phone} <br />
            Website: {todos[5]?.website} <br />
            Company: {todos[5]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_6} setActive={setModalActive_6}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №7</h3>
          <p>
            Name: {todos[6]?.name} <br />
            Username: {todos[6]?.username}
            <br />
            Email: {todos[6]?.email}
            <br />
            Phone: {todos[6]?.phone} <br />
            Website: {todos[6]?.website} <br />
            Company: {todos[6]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_7} setActive={setModalActive_7}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №8</h3>
          <p>
            Name: {todos[7]?.name} <br />
            Username: {todos[7]?.username}
            <br />
            Email: {todos[7]?.email}
            <br />
            Phone: {todos[7]?.phone} <br />
            Website: {todos[7]?.website} <br />
            Company: {todos[7]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_8} setActive={setModalActive_8}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №9</h3>
          <p>
            Name: {todos[8]?.name} <br />
            Username: {todos[8]?.username}
            <br />
            Email: {todos[8]?.email}
            <br />
            Phone: {todos[8]?.phone} <br />
            Website: {todos[8]?.website} <br />
            Company: {todos[8]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
        <Modal active={modalActive_9} setActive={setModalActive_9}>
          <div className="dagger">×</div>
          <h3 className="personal_card">ЛИЧНАЯ КАРТОЧКА №10</h3>
          <p>
            Name: {todos[9]?.name} <br />
            Username: {todos[9]?.username}
            <br />
            Email: {todos[9]?.email}
            <br />
            Phone: {todos[9]?.phone} <br />
            Website: {todos[9]?.website} <br />
            Company: {todos[9]?.company.name}
            <h3 className="save">Сохранить</h3>
          </p>
        </Modal>
      </div>
    </main>
    // todos помогает нам обращаться к конкретному элементу массива из API, а оператор вопросительного знака (?) позволяет обращаться к элементам массива ассинхронно, то есть сначала react возвращает нам jsx-разметку, которая расположена в компоненте после return - однако, в таком случае мы бы получили underfined для значений todos. Знак вопроса помогает предотвратить это и мы можем получить реальное значение из API
    // компоненты Modal - для многократного использования модальных окон
  );
};
