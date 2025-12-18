import React, { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListData] = useState([]);
  function addTodo() {
    setListData((listTodo) => {
      const updatedList = [...listTodo, todo];
      setTodo("");
      return updatedList;
    });
  }
  function doneTodo(i) {
    const updatedListData = listTodo.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }
  function removeAll() {
    setListData("");
  }
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          placeholder="Add Todos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <p className="listHeading">Here are your Tods🔥</p>
        {listTodo != [] &&
          listTodo.map((todo, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listTodos">{todo}</div>
                  <div>
                    <button onClick={() => doneTodo(i)}>Done</button>
                  </div>
                </p>
              </>
            );
          })}

        {listTodo.length >= 1 && (
          <button onClick={removeAll}> Remove All</button>
        )}
      </div>
    </>
  );
}

export default Todolist;
