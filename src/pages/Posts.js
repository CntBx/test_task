import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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
  }, []);

  return (
    <main>
      <section>
        {todos.map((todoItem) => {
          return (
            <article className="elem">
              <h3>UserId: {todoItem.userId}</h3>
              <h2>Id: {todoItem.id}</h2>
              <p>Title: {todoItem.title}</p>
              <p>Body: {todoItem.body}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};
